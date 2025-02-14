import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private products = [{id_product: 1, name: "Vestido elegante", category: "Vestidos", 
  description: '', price: 20, colors: ["#007BFF", "#DC3545", "#28A745"], sizes: ["S", "M", "L", "XL"] ,
  composition: '', garment_care: '', 
  image_main: 'https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg', stock: 1},
{id_product: 2, name: "Conjunto", category: "Pantalones", 
  description: '', price: 40, colors: ["Amarillo", "Verde", "Azul"], sizes: ["S", "M", "L", "XL"] , 
  composition: '', garment_care: '',
  image_main:'https://images.pexels.com/photos/7778880/pexels-photo-7778880.jpeg', stock: 1},

]
  constructor() { }

  getProducts(): Product[] {
    return this.products;
    
  }
  getProductById(id: number) {
    return this.products.find(product => product.id_product === id);
  }

  getCategories() {
    const categories = [...new Set(this.products.map(product => product.category))]; // Elimina duplicados
    console.log('Categorías generadas:', categories); // Verifica si esto devuelve datos
    return categories;
  }
  
}
