"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, 'El nombre es obligatorio']
    },
    password: {
        type: String,
        unique: true,
        required: [true, 'La contraseña es obligatoria']
    }
});
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);
