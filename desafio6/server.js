const express = require('express')
const { urlencoded } = require('express')
const { Server: ServerHttp } = require('http')
const { Server: IOServer } = require('socket.io')


const app = express()
const  PORT = process.env.PORT || 8080
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
/* --------------------------- servidor websocket --------------------------- */
const httpServer = new ServerHttp(app)
const io = new IOServer(httpServer)
/* --------------- configuracion de vistas y engine ejs       --------------- */
app.set('view engine', 'ejs')
app.set('views', './views')
let productos =  []
let mensajes = []
app.get('/', (req, res)=>{
    res.render('index', {productos:productos})
 })
 app.post('/', (req, res)=>{
    const data = req.body
    productos.push(data)
    res.render('index', {productos:productos})
    
 })
 /* -------------------------------- socket IO Server ------------------------------- */
 
io.on('connection', (socket)=>{
    socket.on ('producto-nuevo', (producto)=>{
        productos.push(producto)
        const data = {
            mensaje: 'producto insertado',
            productos
        }
        io.sockets.emit('mensaje-servidor', data)
    })
    socket.on('mensaje-nuevo', (mensaje)=>{
        mensajes.push(mensaje)
        const datam ={
            mensajes
        }
        io.sockets.emit('data-servidor', datam)
    })
})
httpServer.listen(PORT, ()=>{
    console.log(`Escuchando en el servidor ${PORT}`);
})