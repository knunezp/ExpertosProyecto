"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentificacion_1 = require("../middelwares/autentificacion");
const fileSystemGaleria_1 = __importDefault(require("../clases/fileSystemGaleria"));
const galeriaRutas = express_1.Router();
const fileSystemGaleria = new fileSystemGaleria_1.default();
// Subir imagen
galeriaRutas.post('/', autentificacion_1.verificarToken, (req, res) => {
    const body = req.body;
    const file = req.files.img;
    body.img = file.name;
    // console.log(file);
    ImagenesYo.create(body).then(imgYoDB => {
        res.json({
            ok: true,
            imgYoDB
        });
        fileSystemYo.guardarImagenYo(file, req.usuario.nombre);
    }).catch(err => {
        res.json(err);
    });
});
// Mostrar imagen por URL
galeriaRutas.get('/Federica/:img', (req, res) => {
    const img = req.params.img;
    const pathImagen = fileSystemYo.getImgUrl(img);
    res.sendFile(pathImagen);
});
// Actualizar imagen
galeriaRutas.post('/update', autentificacion_1.verificarToken, (req, res) => {
    const file = req.files.img;
    fileSystemGaleria.guardarImg(file, req.usuario.);
    res.json({
        ok: true,
        mensaje: 'Imagen actualizada'
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
exports.default = yoRutas;
