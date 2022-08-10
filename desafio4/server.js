/* -------------------------------------------------------------------------- */
/*                                  Desafio 4                                 */
/* -------------------------------------------------------------------------- */
const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const {Router} = express
const expressRouter = Router()
const error = { error: 'Producto no encontrado'}
const productos = [
    {
        tittle: 'Manta Guelaguetza',
        price: 400,
        thumbnail: 'www.google.com',
        id: 1
    },
    {
        tittle: 'Piñata Normal',
        price: 400,
        thumbnail: 'www.google.com',
        id: 2
    },
    {
        tittle: 'Globos de Fiesta',
        price: 400,
        thumbnail: 'www.google.com',
        id: 3
    }
]
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
/* -------------------------------- Sub-Rutas ------------------------------- */
expressRouter.get('/form', (req, res)=>{
    res.sendFile(__dirname+'/public/index.html')
})
expressRouter.get('/', (req, res)=>{
    res.json(
        productos
        )
    })
    expressRouter.get('/:id', (req, res)=>{
    const {id} = req.params
    const product = productos.find(item => item.id === Number(id))
    if (product) {
        res.json(product)
        
    } else {
        res.json(error)
    }
    
})
expressRouter.post('/', (req, res)=>{
    const producto = req.body
    if (productos.length) {
        const arrayProductos= [...productos, {...producto, id: productos[productos.length-1].id +1 } ]
        res.json(arrayProductos[arrayProductos.length-1])    
    } else {
        const arrayProductos= [...productos, {...producto, id: 1 } ]
    }
})
expressRouter.put('/:id', (req, res)=>{
    const {id} = req.params
    const product = productos.find(item => item.id === Number(id))
    if (product) {
        
        product.tittle = 'Centro de Mesa'
        res.json(product)
        
    } else {
        res.json(error)
    }
})
expressRouter.delete('/:id', (req, res) =>{
    const {id} = req.params
    const product = productos.find(item => item.id === Number(id))
    if (product) {
        const arrayProductos = productos.filter(items => items.id !== Number(id))
        res.json(arrayProductos)
    } else {
        res.json(error)
    }
})
/* -------------------------------- Servidor -------------------------------- */
const server = app.listen(PORT, (req, res) => {
    console.log(`Servidor escuchando en el puerto: ${server.address().port}`)
})
app.use(express.json())
app.use('/api/productos', expressRouter)