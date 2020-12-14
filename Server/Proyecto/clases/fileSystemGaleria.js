"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
class FileSystemGaleria {
    constructor() { }
    guardarImagenGaleria(file, nombre) {
        return new Promise((resolve, reject) => {
            // Crear carpeta
            const path = this.crearCarpetaGaleria(nombre);
            // Nombre del archivo
            const nombreArchivo = file.name;
            // Mover el archivo
            file.mv(`${path}/${nombreArchivo}`, (err) => {
                if (err) {
                    reject();
                }
                else {
                    resolve();
                }
            });
        });
    }
    crearCarpetaGaleria(nombre) {
        const pathGaleria = path_1.default.resolve(__dirname, '../uploads', nombre);
        const existe = fs_1.default.existsSync(pathGaleria);
        if (!existe) {
            fs_1.default.mkdirSync(pathGaleria);
        }
        return pathGaleria;
    }
    getImgUrl(img) {
        const pathImagen = path_1.default.resolve(__dirname, '../uploads', 'ProyectoDW', img);
        return pathImagen;
    }
}
exports.default = FileSystemGaleria;
