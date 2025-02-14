import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../cart/service/cart.service';
import { CartItem } from '../../cart/model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  product: any;
  colors: string[] = [];
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  selectedQuantity: number = 1;
  message: string = '';
  addedToCart = false;
 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService,
  ) {}

  ngOnInit(): void {
    // Obtén el ID de la ruta
    const productId = +this.route.snapshot.paramMap.get('id')!;
    // Busca el producto correspondiente
    this.product = this.productService.getProductById(productId);
    console.log(this.product)
    
    if (this.product) {
      this.selectedImage = this.product.images ? this.product.images[0] : '';
      this.colors = this.product.colors;
      this.selectedColor = this.colors[0];
      this.selectedSize = this.product.sizes && this.product.sizes.length > 0 ? this.product.sizes[0] : '';
    }
  }
  selectImage(image: string): void {
    this.selectedImage = image; 
  }
  selectColor(color: string) {
    this.selectedColor = color;
  }
  increaseQuantity(): void {
    this.selectedQuantity++;
    
  }
  decreaseQuantity(): void {
    if (this.selectedQuantity > 1) {
      this.selectedQuantity--;
    }
  }
  addToCart(): void {
    
      if (!this.product) {
        this.message = '⚠️ Error al obtener los datos del producto';
        setTimeout(() => this.message = '', 3000);
        return;
      }
      const cartItem: CartItem = {
        ...this.product,
        quantity: this.selectedQuantity  // ✅ Agregar la cantidad
      };
    
      this.cartService.addToCart(cartItem);
    
      // ✅ Mostrar advertencia si supera el stock
      if (this.selectedQuantity > this.product.stock) {
        this.message = (this.selectedQuantity - this.product.stock) + ' unidad/es tardará más en llegar debido a stock limitado.'
        + 'n/ ✅ Producto añadido al carrito';
      } else {
        this.message = '✅ Producto añadido al carrito';
      }
    
      // ⏳ Ocultar mensaje después de 3 segundos
      setTimeout(() => this.message = '', 4000);
  }
}
