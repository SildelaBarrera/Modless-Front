export class Product {

    constructor(public title: string, public price: number, 
        public colors: string[], public sizes: string[], public images: string[],
        // public category: string,  
        // // public unidades: number, 
        public id_product: number = 0
    ){ 
    }
}