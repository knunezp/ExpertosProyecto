import { Schema, model, Document } from 'mongoose';

const imagenesUsuarioSchema = new Schema({

    img: {
        type: String
    }
});

interface IImagenesusuario extends Document {
    img: string;
}

export const ImagenesUsuario = model<IImagenesusuario>('ImagenesUsuario',  imagenesUsuarioSchema)
