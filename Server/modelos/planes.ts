import { Schema, model,Document } from 'mongoose';


const planSchema = new Schema({
    precio: {
        type: Number,
    },
    descripcion: {
        type: String,
    },
    paginas: {
        type: Number,
    },
    cantidadProductos: {
        type: Number,
    },
    tipo: {
        type: String,
    },
});

interface IPlan extends Document{
    precio:Number;
    descripcion:string;
    paginas:Number;
    cantidadProductos:Number;
    tipo:String;
}

export const Plan=model<IPlan>('Plan',planSchema)