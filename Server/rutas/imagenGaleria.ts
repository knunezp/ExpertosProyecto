import { Router, Response } from "express";
import { verificarToken } from "../middelwares/autentificacion";
import { ImagenesGaleria } from './../modelos/imagenGaleria';
import FileSystemGaleria from '../clases/fileSystemGaleria';
import fs from 'fs';
import path from 'path';



const galeriaRutas = Router();
const fileSystemGaleria = new FileSystemGaleria();


// Subir imagen
galeriaRutas.post('/', verificarToken, (req: any, res: Response) => {
    const body = req.body;
    const file = req.files.img;
    body.img = file.name;
    // console.log(file);

    ImagenesGaleria.create(body).then(imgGaleriaDB => {
        res.json({
            ok: true,
            imgGaleriaDB
        });

        fileSystemGaleria.guardarImagenGaleria(file, 'proyectoDW');

    }).catch(err => {
        res.json(err)
    });
});


// Actualizar imagen
galeriaRutas.post('/update', verificarToken, (req: any, res: Response) => {

    const file = req.files.img;
    fileSystemGaleria.guardarImagenGaleria(file, req.usuario._id);
    res.json({
        ok: true,
        mensaje: 'Imagen actualizada'
    });
});

// Mostrar imagen por URL
galeriaRutas.get('/ProyectoDW/:img', (req: any, res: Response) => {

    const img = req.params.img;
    const pathImagen = fileSystemGaleria.getImgUrl(img);
    res.sendFile(pathImagen);

});


// Obtener galeria
galeriaRutas.get('/', async (req: any, res: Response) => {
    const img = await ImagenesGaleria.find()
        .sort({ _id: -1 })
        .exec();

    res.json({
        ok: true,
        img
    });
});

// Borrar imagen
// yoRutas.delete('/:id/:name', verificarToken, (req: any, res: Response) => {
//     const id = req.params.id;
//     const name = req.params.name;
//     ImagenesYo.findByIdAndRemove(id, (err, imgBorrar) => {
//         if (err) throw err;
//         res.json({
//             ok: true,
//             mensaje: 'Imagen eliminada',
//             body: imgBorrar
//         })
//         fs.unlinkSync(path.resolve(__dirname, '../uploads', 'Federica', name));
//     });
// });

export default galeriaRutas;