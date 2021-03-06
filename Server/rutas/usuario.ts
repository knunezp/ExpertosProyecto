import { Router, Request, Response } from "express";
import { Usuario } from "../modelos/usuario";

import bcrypt from 'bcryptjs';
import Token from "../clases/token";
import { verificarToken } from "../middelwares/autentificacion";

const usuarioRutas=Router();

// Crear Usuario
usuarioRutas.post("/crear", (req: Request, res: Response) => {
    const usuario = {
        nombre: req.body.nombre,
        apellidos:req.body.apellidos,
        password: bcrypt.hashSync(req.body.password, 10),
        correo:req.body.correo,
        tipoUsuario:req.body.tipoUsuario,
        paginas:req.body.paginas,
        empresa:req.body.empresa,
        pagos:req.body.pagos,
        imgUsuario:req.body.imgUsuario,
        producto:req.body.producto
    };

  // Grabar usuario en Base de Datos
    Usuario.create(usuario)
    .then((usuarioDB) => {
        res.json({
        ok: true,
        usuario: usuarioDB,
        });
    })
    .catch((err) => {
        res.json({
        ok: false,
        err,
        });
    });
});

// Login
usuarioRutas.post('/entrar', (req: Request, res: Response) => {
    const body = req.body;

    Usuario.findOne({ correo: body.correo }, (err, usuarioDB) => {
        if (err) throw err;
        if (!usuarioDB) {
            return res.json({
                ok: false,
                mensaje: 'Invalid data'
            });
        }

        if (usuarioDB.compararContrasena(body.password)) {

            const miToken = Token.getToken({

                _id: usuarioDB._id,
                correo: usuarioDB.correo,
                password: usuarioDB.password

            });

            res.json({
                ok: true,
                token: miToken
            });
        } else {
            return res.json({
                ok: false,
                mensaje: 'Invalid data'
            });
        }

    });

});

// Actualizar mi usuario
usuarioRutas.post('/update', verificarToken, (req: any, res: Response) => {

    const usuario = {
        nombre:req.body.nombre || req.usuario.nombre,
        apellidos:req.body.apellidos || req.usuario.apellidos,
        password:req.body.password || req.usuario.password,
        correo:req.body.correo || req.usuario.correo,
        tipoUsuario:req.body.tipoUsuario || req.usuario.tipoUsuario,
        paginas:req.body.paginas || req.usuario.paginas,
        empresa:req.body.empresa || req.usuario.empresa,
        pagos:req.body.pagos || req.usuario.pagos,
        imgUsuario:req.body.imgUsuario || req.usuario.imgUsuario,
        producto:req.body.producto || req.usuario.producto
    }

    Usuario.findByIdAndUpdate(
        req.usuario._id,
        usuario,
        { new: true },
        (err, userDB) => {
        if (err) throw err;
        if (!userDB) {
            return res.json({
            ok: false,
            mensaje: "Invalid data",
            });
        }
        const miToken = Token.getToken({
            _id: userDB._id,
            correo: userDB.nombre,
            password: userDB.password,
        });
        res.json({
            ok: true,
            token: miToken,
        });
    });
});


// Get usuario
usuarioRutas.get("/", async (req: any, res: Response) => {
    const user = await Usuario.find()
    .limit(1) // Limit es para el número de usuarios que queremos obtener
    .exec();

    res.json({
    ok: true,
    user,
    });
});

// Obtener usuarios
usuarioRutas.get('/get', async (req: any, res: Response) => {
    const users = await Usuario.find()
        .sort({ _id: -1 })
        .exec();

    res.json({
        ok: true,
        users
    });
});

export default usuarioRutas;