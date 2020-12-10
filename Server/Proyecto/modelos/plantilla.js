"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plantilla = void 0;
const mongoose_1 = require("mongoose");
const plantillaSchema = new mongoose_1.Schema({
    titulo: {
        type: String
    },
    descripcion: {
        type: String
    },
    navbar: {
        type: String
    },
    imagen: {
        type: String
    },
    color: {
        type: String
    },
    plantillaPropia: {
        type: Array
    }
});
exports.Plantilla = mongoose_1.model('Plantilla', plantillaSchema);
