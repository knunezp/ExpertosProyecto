import path from 'path';
import fs from 'fs';

export default class FileSystemGaleria {

    constructor() { }

    guardarImg(file: any) {

        return new Promise((resolve, reject) => {

            // Crear carpeta
            const path = this.crearCarpetaImagenGaleria();

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

    private crearCarpetaImagenGaleria() {

        const pathImagenGaleria = path.resolve(__dirname, '../uploads/imgGaleria');

        const existe = fs.existsSync(pathImagenGaleria);

        if (!existe) {
            fs.mkdirSync(pathImagenGaleria);
        }

        return pathImagenGaleria;
    }

    getImgNoticiaUrl(img: string) {

        const pathImgGaleria = path.resolve(__dirname, '../uploads/imgGaleria', img);
        return pathImgGaleria;
    }

    guardarImgYo(file: any) {

        return new Promise((resolve, reject) => {

            // Crear carpeta
            const path = this.crearCarpetaImagenYo();

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

    private crearCarpetaImagenYo() {

        const pathImagenYo = path.resolve(__dirname, '../uploads/imgYo');

        const existe = fs.existsSync(pathImagenYo);

        if (!existe) {
            fs.mkdirSync(pathImagenYo);
        }

        return pathImagenYo;
    }

    getImgYoUrl(img: string) {

        const pathImagenYo = path.resolve(__dirname, '../uploads', 'imgYo', img);
        return pathImagenYo;
    }
}