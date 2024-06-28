import express from "express";
import {} from 'dotenv/config.js'
import cors from "cors";
import http from "http";
import * as io from "socket.io";

import { socketController } from "./sockets/controller.js";

const app = express();

app.use( express.static('public') );
app.use( cors() );

const server = http.createServer(app);
const io2 = new io.Server(server); //io to

io2.on('connection', socketController );

server.listen(process.env.PORT,()=>{
    console.log("Servidor Escuachandoafdxf", process.env.PORT);
})