const Contenedor = require("./contenedor");

const container  = new Contenedor('./productos.txt')

/* ----------------------------- producto nuevo ----------------------------- */
const obj ={
    tittle: "Piñata",
    price: 200,
    thumbnail: "google.com"
}
// container.save(obj)
// container.getById(3)
// container.getAll()
container.deleteById(10)
