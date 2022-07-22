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

/* ---------------------------------- Rutas --------------------------------- */
app.get('/productos', (req, resp)=>{
        producto.getAll()
                .then(data=>{
                    resp.send(data)
                })
                .catch(error=>console.log(error))
})
app.get('/productoRandom', (req, resp)=>{
        producto.getRandom()
                .then(data=>{
                    resp.send(data)
                })
})
app.get('/', (req, resp)=>{
    resp.send(`<h1 style="text-align:center">Desafio 3: Servidor con Express</h1>
                <a href="/productos" style="text-align:center">Todos los Productos</a>
                <a href="/productoRandom" style="text-align:center">Producto Aleatorio</a>`)
})

