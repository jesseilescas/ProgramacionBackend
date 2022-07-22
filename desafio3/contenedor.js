const fs =require('fs')

class Contenedor{
    constructor(ruta){
        this.ruta = ruta
    }
    getAll(){
        try {
            let dataArch =  fs.readFileSync(this.ruta, 'utf-8')
            let dataArchParse = JSON.parse(dataArch)
            if (dataArchParse.length) {
                return dataArchParse
                
            } else {
                return 'No hay Productos'
            }
            
        } catch (error) {
            console.log(error);
        }
        // try {
        //     let dataArch = await fs.promises.readFile(this.ruta, 'utf-8')
        //     let dataArchParse = JSON.parse(dataArch)
        //     if (dataArchParse.length) {
        //         console.log();
        //     }else{
        //         console.log('No hay productos Guardados');
        //     }
            
        // } catch (error) {
        //     console.log(error);
        // } 
        
    }
    getRandom(){
        try {
            let dataArch =  fs.readFileSync(this.ruta, 'utf-8')
            let dataArchParse = JSON.parse(dataArch)
            const random = Math.floor(Math.random()*dataArchParse.length)
            return dataArchParse[random]
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = Contenedor