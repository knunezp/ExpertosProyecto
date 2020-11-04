import { Schema, model,Document } from 'mongoose';
import bcrypt from 'bcryptjs';

const usuarioSchema=new Schema({

    nombre:{
        type:String,
        unique:true,
        required:[true,"El nombre es obligatorio"]
    },
    apellidos:{
        type:String,
        unique:true,
        required:[true,"El apellido es obligatorio"]
    },
    correo:{
        type:String,
        unique:true,
        required:[true,"El correo es obligatorio"]
    },
    password:{
        type:String,
        unique:true,
        required:[true,"El contrasenia es obligatoria"]
    },
    tipoUsuario:{
        type:String,
        unique:true,
        required:[true,"El tipo Usuario es obligatorio"]
    }
});

usuarioSchema.method('compararContrasena', function (password: string = ''): boolean {

    if (bcrypt.compareSync(password, this.password)) {
        return true;
    } else {
        return false;
    }
});

interface IYo extends Document{
    nombre:string;
    apellidos:string;
    correo:string;
    password:string;
    tipoUsuario:string;
    compararContrasena(password: string): boolean
}

export const Usuario=model<IYo>('Usuario',usuarioSchema)