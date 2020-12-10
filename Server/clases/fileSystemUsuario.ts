import path from 'path';
import fs from 'fs';

export default class FileSystemUsuario {

    constructor() { }

    guardarImagenUsuario(file: any, nombre: string) {

        return new Promise((resolve, reject) => {

            // Crear carpeta
            const path = this.crearCarpetaUsuario(nombre);

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

    private crearCarpetaUsuario(nombre: string) {

        const pathYo = path.resolve(__dirname, '../uploads', nombre);

        const existe = fs.existsSync(pathYo);

        if (!existe) {
            fs.mkdirSync(pathYo);
        }

        return pathYo;
    }

    getImgUrl(img: string) {

        const pathImagen = path.resolve(__dirname, '../uploads', 'Usuario', img);
        return pathImagen;
    }
}