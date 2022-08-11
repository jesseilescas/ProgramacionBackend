const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const  PORT = process.env.PORT || 8080
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
const productos =  []
/* --------------- configuracion de vistas y engine Handlebars --------------- */
app.engine(
    'hbs',
    handlebars.engine({
       extname: '.hbs',
       defaultLayout: 'index.hbs',
       layoutsDir: __dirname + '/views/layouts',
       partialsDir: __dirname + '/views/partials'
    })
 )
app.set('view engine', 'hbs')
app.set('views', './views/layouts')
app.set('view options', { layout: 'productos' });
/* ---------------------------------- rutas --------------------------------- */
app.get('/', (req, res)=>{
    
    res.render('index', {productos:productos})
 })
app.post('/productos' ,(req, res)=>{
    const data = req.body
    productos.push(data)
    res.render('index', {productos:productos})
})
app.get('/productos',(req, res)=>{
    if(productos.length>0){
        res.render('productos',{dataExist: true, layout:'productos', data:productos})
    }else{
        res.render('productos',{dataExist: false, layout:'productos', data:productos})
    }
})
 

const server = app.listen(PORT, ()=>{
    console.log(`Escuchando en el servidor ${server.address().port}`);
})