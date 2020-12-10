"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./clases/server"));
const mongoose_1 = __importDefault(require("mongoose"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("./rutas/usuario"));
const plantillas_1 = __importDefault(require("./rutas/plantillas"));
const plan_1 = __importDefault(require("./rutas/plan"));
//server
const server = new server_1.default();
// Body Parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// CORS
server.app.use(cors_1.default({ origin: true, credentials: true }));
// Fileupload
server.app.use(express_fileupload_1.default());
//rutas
server.app.use('/usuario', usuario_1.default);
server.app.use('/plantilla', plantillas_1.default);
server.app.use('/plan', plan_1.default);
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
