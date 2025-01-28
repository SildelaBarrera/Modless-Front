import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts() {
    return [
      {id_product: 1, title: "Vestido elegante", price: 20, image: 'https://images.pexels.com/photos/2173357/pexels-photo-2173357.jpeg'},
      {id_product: 2, title: "Conjunto", price: 40, image:'https://images.pexels.com/photos/7778880/pexels-photo-7778880.jpeg'},
      {id_product: 3, title: "Vestido amarillo", price: 40, image: 'https://images.pexels.com/photos/1936854/pexels-photo-1936854.jpeg'}
    ]
  }
}
