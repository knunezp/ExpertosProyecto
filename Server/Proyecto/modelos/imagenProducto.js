"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenesProducto = void 0;
const mongoose_1 = require("mongoose");
const imagenesProductoSchema = new mongoose_1.Schema({
    img: {
        type: String
    }
});
exports.ImagenesProducto = mongoose_1.model('ImagenesProducto', imagenesProductoSchema);
