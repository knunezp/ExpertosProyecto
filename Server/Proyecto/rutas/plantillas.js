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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const autentificacion_1 = require("../middelwares/autentificacion");
const plantilla_1 = require("../modelos/plantilla");
const plantillaRutas = express_1.Router();
// Crear plantilla
plantillaRutas.post('/', (req, res) => {
    const body = req.body;
    const titulo = req.params.titulo;
    const descripcion = req.params.descripcion;
    const navbar = req.params.navbar;
    const imagen = req.params.imagen;
    const color = req.params.color;
    const plantillaPropia = req.params.plantillaPropia;
    body.body = body;
    body.titulo = titulo;
    body.descripcion = descripcion;
    body.navbar = navbar;
    body.imagen = imagen;
    body.color = color;
    body.plantillaPropia = plantillaPropia;
    plantilla_1.Plantilla.create(body).then(PlantillaDB => {
        res.json({
            ok: true,
            Plantilla: PlantillaDB
        });
    }).catch(err => {
        res.json(err);
    });
});
// Actualizar plantilla
plantillaRutas.post('/update/:id', autentificacion_1.verificarToken, (req, res) => {
    const id = req.params.id;
    const plantilla = {
        body: req.body,
        titulo: req.params.titulo,
        descripcion: req.params.descripcion,
        navbar: req.params.navbar,
        imagen: req.params.imagen,
        color: req.params.color,
        plantillaPropia: req.params.plantillaPropia
    };
    plantilla_1.Plantilla.findByIdAndUpdate(id, plantilla, { new: true }, (err, PlantillaDB) => {
        if (err)
            throw err;
        if (!PlantillaDB) {
            return res.json({
                ok: false,
                mensaje: 'Invalid data'
            });
        }
        res.json({
            ok: true,
            Plantilla: plantilla_1.Plantilla
        });
    });
});
// Obtener plantillas
plantillaRutas.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plantilla = yield plantilla_1.Plantilla.find()
        .sort({ _id: -1 })
        .exec();
    res.json({
        ok: true,
        Plantilla: plantilla_1.Plantilla
    });
}));
exports.default = plantillaRutas;
