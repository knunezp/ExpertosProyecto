import { Schema, model,Document } from 'mongoose';
import bcrypt from 'bcryptjs';

const usuarioSchema=new Schema({

    nombre:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    apellidos:{
        type:String,
        required:[true,"El apellido es obligatorio"]
    },
    correo:{
        type:String,
        unique:true,
        required:[true,"El correo es obligatorio"]
    },
    password:{
        type:String,
        required:[true,"La contrasenia es obligatoria"]
    },
    tipoUsuario:{
        type:String,
        required:[true,"El tipo Usuario es obligatorio"]
    },
    paginas:{
        type:Array
    },
    empresa:{
        type:Array
    },
    pagos:{
        type:Array
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
    paginas:Array<Object>;
    empresa:Array<Object>;
    pagos:Array<Object>;
    compararContrasena(password: string): boolean
}

export const Usuario=model<IYo>('Usuario',usuarioSchema)