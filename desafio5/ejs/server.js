const express = require('express')


const app = express()
const  PORT = process.env.PORT || 8080
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
const productos =  []
/* --------------- configuracion de vistas y engine pug       --------------- */
app.set('view engine', 'ejs')
app.set('views', './views')
/* ---------------------------------- rutas --------------------------------- */
app.get('/', (req, res)=>{
    
    res.render('index', {productos:productos})
 })
 app.post('/productos', (req, res)=>{
    const data = req.body
    productos.push(data)
    res.render('index', {productos:productos})
    
 })
app.get('/productos', (req, res)=>{
    res.render('productos', {productos:productos})
})

const server = app.listen(PORT, ()=>{
    console.log(`Escuchando en el servidor ${server.address().port}`);
})