require('dotenv').config()
const express = require("express")
const app = express()
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io")
const io = new Server(server)
var mysql = require("mysql")
const path = require("path")
const bodyParser = require("body-parser")

var con = mysql.createConnection({
    host:"localhost",
    user: "username",
    password: "password",
    database: "cinque"
})

con.connect(function(err){
    if(err) throw err;
    console.log("Base de datos conectada")
})

const conversationRoutes = require("./routes/conversationRoutes")
const friendRoutes = require("./routes/friendRoutes")
const transferRoutes = require("./routes/transferRoutes")
const userRoutes = require("./routes/userRoutes")

app.use("/api/conversations",conversationRoutes)
app.use("/api/friends",friendRoutes)
app.use("/api/transfers",transferRoutes)
app.use("/api/users",userRoutes)

io.on("connection", (socket)=>{
    console.log("Conectado")
    /* socket.on("disconnect",()=>{
        console.log("Usuario desconectado")
    }) */
})
server.listen(3500, ()=>{
    console.log("Escuchando en puerto 3500")
})