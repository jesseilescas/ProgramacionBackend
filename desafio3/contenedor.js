const fs =require('fs')

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }
    async getAll(){
             try {
            let dataArch = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchParse = JSON.parse(dataArch)
            if (dataArchParse.length) {
                return (dataArchParse) 
            }else{
                console.log('No hay productos Guardados');
            }
            
        } catch (error) {
            console.log(error);
        } 
    }
    async getRandom(){
        try {
            let dataArch = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataArchParse = JSON.parse(dataArch)
            const random = Math.floor(Math.random()*dataArchParse.length)
            return dataArchParse[random]
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Contenedor