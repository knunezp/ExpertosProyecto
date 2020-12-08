import { Schema, model,Document } from 'mongoose';


const plantillaSchema=new Schema({

    titulo:{
        type:String
    },
    descripcion:{
        type:String
    },
    navbar:{
        type:String
    },
    imagen:{
        type:String
    },
    color:{
        type:String
    },
    plantillaPropia:{
        type:Array
    }
});

interface IPlantilla extends Document{
    titulo:string;
    descripcion:string;
    navbar:String;
    imagen:String;
    color:String;
    plantillaPropia:Array<Object>;
}

export const Plantilla=model<IPlantilla>('Plantilla',plantillaSchema)