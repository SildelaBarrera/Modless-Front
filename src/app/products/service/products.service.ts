import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
private products = [{id_product: 1, title: "Vestido elegante", price: 20, colors: ["#007BFF", "#DC3545", "#28A745"], sizes: ["S", "M", "L", "XL"] , images: ['https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg','https://images.pexels.com/photos/29734037/pexels-photo-29734037/free-photo-of-hermosa-mujer-morena-modelando-cuello-alto-clutch-y-pantalones.jpeg', 'https://images.pexels.com/photos/11288126/pexels-photo-11288126.jpeg', 'https://images.pexels.com/photos/30366141/pexels-photo-30366141/free-photo-of-elegante-retrato-de-moda-en-el-interior-de-marrakech.jpeg' ]},
{id_product: 2, title: "Conjunto", price: 40, colors: ["#007BFF", "#DC3545", "#28A745"], sizes: ["S", "M", "L", "XL"] , images: ['https://images.pexels.com/photos/7778880/pexels-photo-7778880.jpeg', 'https://images.pexels.com/photos/15576188/pexels-photo-15576188/free-photo-of-moda-mujer-en-pie-de-pie.jpeg', 'https://images.pexels.com/photos/7760026/pexels-photo-7760026.jpeg', 'https://images.pexels.com/photos/16048094/pexels-photo-16048094/free-photo-of-moda-gafas-de-sol-mujer-modelo.jpeg']},
{id_product: 3, title: "Vestido amarillo", price: 40,  colors: ["#007BFF", "#DC3545", "#28A745"], sizes: ["S", "M", "L", "XL"] , images: ['https://images.pexels.com/photos/1936854/pexels-photo-1936854.jpeg','https://images.pexels.com/photos/15146363/pexels-photo-15146363/free-photo-of-moda-mujer-modelo-maqueta.jpeg', 'https://images.pexels.com/photos/10760395/pexels-photo-10760395.jpeg','https://images.pexels.com/photos/19970756/pexels-photo-19970756/free-photo-of-fotografia-de-estudio-de-una-mujer-joven-con-un-traje-negro-de-moda.jpeg' ]}
]
  constructor() { }

  getProducts(): Product[] {
    return this.products;
    
  }
  getProductById(id: number) {
    return this.products.find(product => product.id_product === id);
  }
}
