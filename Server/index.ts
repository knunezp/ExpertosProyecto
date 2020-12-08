import Server from './clases/server';
import  mongoose  from 'mongoose';
import fileupload from 'express-fileupload';
import bodyParser from "body-parser";
import cors from 'cors';

import usuarioRutas from './rutas/usuario';
import plantillaRutas from './rutas/plantillas';

const server =new Server();

// Body Parser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());

// CORS
server.app.use(cors({ origin: true, credentials: true }));

// Fileupload
server.app.use(fileupload());

//rutas
server.app.use('/usuario',usuarioRutas);
server.app.use('/plantilla',plantillaRutas);


// Conectar Base de Datos
mongoose.connect(
    'mongodb://localhost:27017/ProyectoDB',
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false },
    (err) => {
        if (err) throw "err";
        console.log('Base de datos ONLINE');
    }
)

//Levantar el servidor
server.start(()=>{
    console.log(`Servidor Proyecto corriendo en el puerto ${server.port}`);
})