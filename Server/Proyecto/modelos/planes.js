"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
const mongoose_1 = require("mongoose");
const planSchema = new mongoose_1.Schema({
    precio: {
        type: Number,
    },
    descripcion: {
        type: String,
    },
    paginas: {
        type: Number,
    },
    cantidadProductos: {
        type: Number,
    },
    tipo: {
        type: String,
    },
});
exports.Plan = mongoose_1.model('Plan', planSchema);
