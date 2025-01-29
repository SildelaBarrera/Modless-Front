import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CartService } from '../../cart/service/cart.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  product: any;
  selectedImage: string = '';
  selectedColor: string = '';
  selectedSize: string = '';
  addedToCart = false;
 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    // Obtén el ID de la ruta
    const productId = +this.route.snapshot.paramMap.get('id')!;
    // Busca el producto correspondiente
    this.product = this.productService.getProductById(productId);
    console.log(this.product)
    
    if (this.product) {
      this.selectedImage = this.product.images ? this.product.images[0] : '';
      this.selectedColor = this.product.colors && this.product.colors.length > 0 ? this.product.colors[0] : '';
      this.selectedSize = this.product.sizes && this.product.sizes.length > 0 ? this.product.sizes[0] : '';
    }
  }
  selectImage(image: string): void {
    this.selectedImage = image;
    
  }
  selectColor(color: string) {
    this.selectedColor = color;
  }

  addToCart() {
    const productToAdd = {
      ...this.product,
      selectedColor: this.selectedColor,
      selectedSize: this.selectedSize
    };
    this.cartService.addToCart(productToAdd);
    this.addedToCart = true;

    setTimeout(() => this.addedToCart = false, 3000); // Oculta el mensaje tras 3 segundos
  }
}
