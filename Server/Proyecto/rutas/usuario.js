"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../modelos/usuario");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const token_1 = __importDefault(require("../clases/token"));
const autentificacion_1 = require("../middelwares/autentificacion");
const usuarioRutas = express_1.Router();
// Crear Usuario
usuarioRutas.post("/crear", (req, res) => {
    const usuario = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        password: bcryptjs_1.default.hashSync(req.body.password, 10),
        correo: req.body.correo,
        tipoUsuario: req.body.tipoUsuario,
        paginas: req.body.paginas,
        empresa: req.body.empresa,
        pagos: req.body.pagos,
        imgUsuario: req.body.imgUsuario,
        producto: req.body.producto
    };
    // Grabar usuario en Base de Datos
    usuario_1.Usuario.create(usuario)
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
usuarioRutas.post('/entrar', (req, res) => {
    const body = req.body;
    usuario_1.Usuario.findOne({ correo: body.correo }, (err, usuarioDB) => {
        if (err)
            throw err;
        if (!usuarioDB) {
            return res.json({
                ok: false,
                mensaje: 'Invalid data'
            });
        }
        if (usuarioDB.compararContrasena(body.password)) {
            const miToken = token_1.default.getToken({
                _id: usuarioDB._id,
                correo: usuarioDB.correo,
                password: usuarioDB.password
            });
            res.json({
                ok: true,
                token: miToken
            });
        }
        else {
            return res.json({
                ok: false,
                mensaje: 'Invalid data'
            });
        }
    });
});
// Actualizar mi usuario
usuarioRutas.post('/update', autentificacion_1.verificarToken, (req, res) => {
    const usuario = {
        nombre: req.body.nombre || req.usuario.nombre,
        apellidos: req.body.apellidos || req.usuario.apellidos,
        password: req.body.password || req.usuario.password,
        correo: req.body.correo || req.usuario.correo,
        tipoUsuario: req.body.tipoUsuario || req.usuario.tipoUsuario,
        paginas: req.body.paginas || req.usuario.paginas,
        empresa: req.body.empresa || req.usuario.empresa,
        pagos: req.body.pagos || req.usuario.pagos,
        imgUsuario: req.body.imgUsuario || req.usuario.imgUsuario,
        producto: req.body.producto || req.usuario.producto
    };
    usuario_1.Usuario.findByIdAndUpdate(req.usuario._id, usuario, { new: true }, (err, userDB) => {
        if (err)
            throw err;
        if (!userDB) {
            return res.json({
                ok: false,
                mensaje: "Invalid data",
            });
        }
        const miToken = token_1.default.getToken({
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
usuarioRutas.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield usuario_1.Usuario.find()
        .limit(1) // Limit es para el número de usuarios que queremos obtener
        .exec();
    res.json({
        ok: true,
        user,
    });
}));
// Obtener usuarios
usuarioRutas.get('/get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const users = yield usuario_1.Usuario.find()
        .sort({ _id: -1 })
        .exec();
    res.json({
        ok: true,
        users
    });
}));
exports.default = usuarioRutas;
