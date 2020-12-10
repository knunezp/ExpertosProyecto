import { Schema, model, Document } from 'mongoose';

const imagenesGaleriaSchema = new Schema({

    img: {
        type: String
    }
});

interface ImagenesGalerias extends Document {
    img: string;
}

export const ImagenesGaleria = model<ImagenesGalerias>('ImagenesGaleria',  imagenesGaleriaSchema)
