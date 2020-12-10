import { Schema, model, Document } from 'mongoose';

const imagenesProductoSchema = new Schema({

    img: {
        type: String
    }
});

interface ImagenesProductos extends Document {
    img: string;
}

export const ImagenesProducto = model<ImagenesProductos>('ImagenesProducto',  imagenesProductoSchema)
