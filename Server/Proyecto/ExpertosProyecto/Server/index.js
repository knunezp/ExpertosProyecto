"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const mongoose_1 = __importDefault(require("mongoose"));
const usuario_1 = __importDefault(require("./rutas/usuario"));
const server = new server_1.default();
//rutas
server.app.use('/usuario', usuario_1.default);
// Conectar Base de Datos
mongoose_1.default.connect('mongodb://localhost:27017/ProyectoDB', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if (err)
        throw "err";
    console.log('Base de datos ONLINE');
});
//Levantar el servidor
server.start(() => {
    console.log(`Servidor Proyecto corriendo en el puerto ${server.port}`);
});
