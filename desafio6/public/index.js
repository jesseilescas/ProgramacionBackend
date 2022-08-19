/* ----------------------------- Scripts Client ----------------------------- */
const server = io().connect()

const productMap = (productos) => {
    let tableBody = document.getElementById('tabla')
    let html = productos.map(prod=>{
        return `<tr>
                    <td>${prod.title}</td>
                    <td> $ ${prod.price}</td>
                    <td> <img src="${prod.thumbnail}"></td>
                </tr>
                `
    })
    tableBody.innerHTML = html.join(' ')
}
const showMessage = (mensaje) =>{
    let messageContainer = document.getElementById('lista-mensajes')
    let html = mensaje.map(mensj =>{
        return `<li>
        <em style="color: blue; font-weight: bold;">${mensj.user}</em> [<em style="color: red;">${mensj.date}</em> ] <em style="color: green;"> : ${mensj.msg}</em>
        </li>`
    })
    messageContainer.innerHTML = html.join(' ')
}

server.on('mensaje-servidor', data => {
    productMap(data.productos)
})
server.on('data-servidor', mensaje =>{
    showMessage(mensaje.mensajes)
})

const addProduct = () => {
    const title = document.getElementById('title').value
    const price = document.getElementById('price').value
    const thumbnail = document.getElementById('thumbnail').value

    const producto = { title, price, thumbnail }

    server.emit('producto-nuevo', producto)
    return false
}
const sendMessage = ()=>{
    const user = document.getElementById('usuario').value
    const msg = document.getElementById('mensaje').value
    const date = new Date().toLocaleString()
    const mensaje = {user,date, msg}
    server.emit('mensaje-nuevo', mensaje)
    
    return false
}