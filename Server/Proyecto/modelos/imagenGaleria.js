"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagenesGaleria = void 0;
const mongoose_1 = require("mongoose");
const imagenesGaleriaSchema = new mongoose_1.Schema({
    img: {
        type: String
    }
});
exports.ImagenesGaleria = mongoose_1.model('ImagenesGaleria', imagenesGaleriaSchema);
