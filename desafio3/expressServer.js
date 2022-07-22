/* -------------------------------------------------------------------------- */
/*                        Desafio: Servidor con Express                       */
/* -------------------------------------------------------------------------- */
/* ----------------------- configuración del servidor ----------------------- */
const express = require('express')
const app = express()

const PORT = 8080
const server = app.listen(PORT, ()=>{
    console.log(`Servidor funcionando en el puerto: ${server.address().port}`);
})
server.on('error', (err)=>console.log(err))
/* ----------------------------- Data: Productos ---------------------------- */
const Contenedor = require("./contenedor");
const producto = new Contenedor('./productos.txt')
const productos = producto.getAll()
const productoRandom = producto.getRandom()

/* ---------------------------------- Rutas --------------------------------- */
app.get('/productos', (req, resp)=>{
    resp.send(productos)
})
app.get('/productoRandom', (req, resp)=>{
    resp.send(productoRandom)
})

