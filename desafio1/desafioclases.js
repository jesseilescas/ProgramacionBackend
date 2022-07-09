/* ---------------------------------- Clase --------------------------------- */
class Usuario {
    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }
    getFullName(){
        console.log(`${nombre} ${apellido}`)
    }
    addMascota(mascota){
        this.mascotas.push(mascota)
    }
    countMascotas(){
        console.log('Numero de Mascotas:',mascotas.length);
    }
    addBook(nuevoLib){
        this.libros.push(nuevoLib)
    }
    getBookNames(){
        let bookNames = []
        bookNames = libros.map(function (libro) {
            let returnLibro = libro.nombre
            return returnLibro
        })
        console.log(bookNames);
    }
}
/* -------------------------------- Variables ------------------------------- */
let nombre = 'Jesse'
let apellido = 'Ilescas'
let libros = [
    {
        nombre: "Harry Potter la Piedra Filosofal",
        autor:  "J. K. Rowling"
    },
    {
        nombre: "Dune",
        autor : "Frank Herbert"
    },
    {
        nombre: "Neuromante",
        autor: "William Gibson"
    }
]
let mascotas = ['Perro', 'Gato', 'Pez']
const nuevoLibro = {
    nombre: 'El problema de los tres cuerpos',
    autor: 'Liu Cixin'
}
/* ---------------------------- Instanciar Clase ---------------------------- */
const usuario = new Usuario(nombre, apellido, libros, mascotas)

/* ---------------------------- Llamada a métodos --------------------------- */
usuario.getFullName()
usuario.addMascota('Loro')
usuario.countMascotas()
usuario.addBook(nuevoLibro)
usuario.getBookNames()