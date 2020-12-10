"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenesUsuario = void 0;
const mongoose_1 = require("mongoose");
const imagenesUsuarioSchema = new mongoose_1.Schema({
    img: {
        type: String
    }
});
exports.ImagenesUsuario = mongoose_1.model('ImagenesUsuario', imagenesUsuarioSchema);
