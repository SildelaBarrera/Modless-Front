export class Product {

    constructor(public name: string, public price: number, 
        public colors: string[], public sizes: string[], public images: string[],
        public stock: number,
        // public category: string,  
        // // public unidades: number, 
        public id_product: number = 0
    ){ 
    }
}