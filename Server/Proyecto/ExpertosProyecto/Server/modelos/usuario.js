"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        unique: true,
        required: [true, "El nombre es obligatorio"]
    },
    apellidos: {
        type: String,
        unique: true,
        required: [true, "El apellido es obligatorio"]
    },
    correo: {
        type: String,
        unique: true,
        required: [true, "El correo es obligatorio"]
    },
    password: {
        type: String,
        unique: true,
        required: [true, "El contrasenia es obligatoria"]
    },
    tipoUsuario: {
        type: String,
        unique: true,
        required: [true, "El tipo Usuario es obligatorio"]
    }
});
exports.Usuario = mongoose_1.model('Usuario', usuarioSchema);
