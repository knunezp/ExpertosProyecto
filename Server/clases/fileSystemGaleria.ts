import path from 'path';
import fs from 'fs';

export default class FileSystemGaleria {

    constructor() { }

    guardarImagenGaleria(file: any, nombre: string) {

        return new Promise((resolve, reject) => {

            // Crear carpeta
            const path = this.crearCarpetaGaleria(nombre);

            // Nombre del archivo
            const nombreArchivo = file.name;

            // Mover el archivo
            file.mv(`${path}/${nombreArchivo}`, (err: any) => {

                if (err) {
                    reject();
                } else {
                    resolve();
                }
            });
        });
    }

    private crearCarpetaGaleria(nombre: string) {

        const pathGaleria = path.resolve(__dirname, '../uploads', nombre);

        const existe = fs.existsSync(pathGaleria);

        if (!existe) {
            fs.mkdirSync(pathGaleria);
        }

        return pathGaleria;
    }

    getImgUrl(img: string) {

        const pathImagen = path.resolve(__dirname, '../uploads', 'ProyectoDW', img);
        return pathImagen;
    }
}