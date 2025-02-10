import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';
import { CartItem } from '../model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  
  cartItems: CartItem[] = [];
  total: number = 0;
  totalQuantity: number = 0;
  showStockWarning: boolean = false;


  constructor(private cartService: CartService) {
    
   }

  ngOnInit(): void {
  
    this.cartService.cart$.subscribe((items: CartItem[]) => {
      this.cartItems = items;
      this.total = this.cartService.getTotal();
      this.totalQuantity = this.cartService.getTotalQuantity();
    });
    this.cartService.cart$.subscribe(cart => {
      this.cartItems = cart;
      this.showStockWarning = this.cartService.hasProductsExceedingStock();
    });
  }

  increaseQuantity(productId: number): void {
    this.cartService.increaseQuantity(productId);
  }

  decreaseQuantity(productId: number): void {
    this.cartService.decreaseQuantity(productId);
  }

  removeProduct(item: CartItem): void {
    this.cartService.removeFromCart(item);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  checkout(): void {
    alert(`Total a pagar: $${this.total.toFixed(2)}`);
    this.clearCart();
  }
}
