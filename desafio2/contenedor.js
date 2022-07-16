
const fs =require('fs')

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }

    async save(obj){
        try {
            let dataArch = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchParse = JSON.parse(dataArch)
            if (dataArchParse.length) {
                await fs.promises.writeFile(this.ruta, JSON.stringify([...dataArchParse, {...obj, id: dataArchParse[dataArchParse.length-1].id +1 } ], null, 2))
                
            } else {
                
                await fs.promises.writeFile(this.ruta, JSON.stringify([{...obj, id: 1 } ], null, 2))
            }
            console.log(`El producto tiene el id: ${dataArchParse[dataArchParse.length-1].id +1}`);
            
        } catch (error) {
            console.log(error);
        }
    }
    async getById (id){
        try {
            let dataArch = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchParse = JSON.parse(dataArch)
            const product = dataArchParse.find(producto => producto.id === id) 
            if (product) {
                console.log(product);
            } else {
                console.log(`No se encontro Producto con el ID: ${id}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
    async getAll(){
        try {
            let dataArch = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchParse = JSON.parse(dataArch)
            if (dataArchParse.length) {
                console.log(dataArchParse);
            }else{
                console.log('No hay productos Guardados');
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    async deleteById(id){
        try {
            let dataArch = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchParse = JSON.parse(dataArch)
            if (dataArchParse.length) {
                let prodToDelete = dataArchParse.find(element => element.id==id)
                if (prodToDelete) {
                    let remaining = dataArchParse.filter(element => element.id !== id)
                    await fs.promises.writeFile(this.ruta, JSON.stringify(remaining, null, 2), 'utf-8')
                    console.log(`Producto con ID: ${id} eliminado correctamente`);
                } else {
                    console.log('No exixste producto con el ID ingresado');
                }
            } else {
                console.log('No hay productos guardados');
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    async deleteAll(){
        await fs.promises.writeFile(this.ruta, '[]', 'utf-8')
        console.log('Productos Eliminados');
    }

}

module.exports = Contenedor