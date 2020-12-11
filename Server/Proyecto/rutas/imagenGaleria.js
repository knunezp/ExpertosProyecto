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
const autentificacion_1 = require("../middelwares/autentificacion");
const imagenGaleria_1 = require("./../modelos/imagenGaleria");
const fileSystemGaleria_1 = __importDefault(require("../clases/fileSystemGaleria"));
const galeriaRutas = express_1.Router();
const fileSystemGaleria = new fileSystemGaleria_1.default();
// Subir imagen
galeriaRutas.post('/', autentificacion_1.verificarToken, (req, res) => {
    const body = req.body;
    const file = req.files.img;
    body.img = file.name;
    // console.log(file);
    imagenGaleria_1.ImagenesGaleria.create(body).then(imgGaleriaDB => {
        res.json({
            ok: true,
            imgGaleriaDB
        });
        fileSystemGaleria.guardarImagenGaleria(file, 'proyectoDW');
    }).catch(err => {
        res.json(err);
    });
});
// Actualizar imagen
galeriaRutas.post('/update', autentificacion_1.verificarToken, (req, res) => {
    const file = req.files.img;
    fileSystemGaleria.guardarImagenGaleria(file, req.usuario._id);
    res.json({
        ok: true,
        mensaje: 'Imagen actualizada'
    });
});
// Mostrar imagen por URL
galeriaRutas.get('/ProyectoDW/:img', (req, res) => {
    const img = req.params.img;
    const pathImagen = fileSystemGaleria.getImgUrl(img);
    res.sendFile(pathImagen);
});
// Obtener galeria
galeriaRutas.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const img = yield imagenGaleria_1.ImagenesGaleria.find()
        .sort({ _id: -1 })
        .exec();
    res.json({
        ok: true,
        img
    });
}));
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
exports.default = galeriaRutas;
