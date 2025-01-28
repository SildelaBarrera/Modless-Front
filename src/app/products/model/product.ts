export class Product {

    constructor(public title: string, public category: string, public description: string, 
        public color: string, public material: string, public talla: number, public price: number,  
        public unidades: number,  public images: string, public id_prodcut: number = 0){ 
    }
}