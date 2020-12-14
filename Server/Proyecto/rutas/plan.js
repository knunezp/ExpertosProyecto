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
const planes_1 = require("../modelos/planes");
const planRutas = express_1.Router();
// Crear plan verificarToken,
planRutas.post("/crear", (req, res) => {
    const plan = {
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        paginas: req.body.paginas,
        cantidadProductos: req.body.cantidadProductos,
        tipo: req.body.tipo
    };
    // Grabar plan en Base de Datos
    planes_1.Plan.create(plan)
        .then((planDB) => {
        res.json({
            ok: true,
            plan: planDB,
        });
    })
        .catch((err) => {
        res.json({
            ok: false,
            err,
        });
    });
});
// Actualizar plantilla verificarToken,verificarToken,
planRutas.post('/update/:id', (req, res) => {
    const id = req.params.id;
    const plan = {
        body: req.body,
        precio: req.params.precio,
        descripcion: req.params.descripcion,
        paginas: req.params.paginas,
        cantidadProductos: req.params.cantidadProductos,
        tipo: req.params.tipo
    };
    planes_1.Plan.findByIdAndUpdate(id, plan, { new: true }, (err, PlanDB) => {
        if (err)
            throw err;
        if (!PlanDB) {
            return res.json({
                ok: false,
                mensaje: 'Invalid data'
            });
        }
        res.json({
            ok: true,
            Plan: planes_1.Plan
        });
    });
});
// Obtener plantillas
planRutas.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const plan = yield planes_1.Plan.find()
        .sort({ _id: -1 })
        .exec();
    res.json({
        ok: true,
        plan
    });
}));
exports.default = planRutas;
