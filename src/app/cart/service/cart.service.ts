import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../products/model/product';
import { CartItem } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<any[]>([]);

  cart$ = this.cartSubject.asObservable();

  constructor() {
    //recuperar carrito
    const storedCart = localStorage.getItem('cartItems');
    if (storedCart) {
      this.cartItems = JSON.parse(storedCart);
      this.cartSubject.next(this.cartItems);
    }
  }
  //actualizar estado carrito
  private updateCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    this.cartSubject.next(this.cartItems);
  }

  getCart() {
    return this.cartItems;
  }

  addToCart(product: CartItem): void {
    const existingProduct = this.cartItems.find(item => item.id_product === product.id_product);

    if (existingProduct) {
      // ✅ Si el producto ya está en el carrito, aumentamos su cantidad
      existingProduct.quantity += product.quantity;
    } else {
      // ✅ Si el producto no está en el carrito, lo agregamos
      this.cartItems.push({ ...product });
    }

    this.updateCart();
  }
  hasProductsExceedingStock(): boolean {
    return this.cartItems.some(item => item.quantity > item.stock);
  }
  increaseQuantity(productId: number): void {
    const item = this.cartItems.find(p => p.id_product === productId);
    if (item && item.quantity < item.stock) {
      item.quantity++;
      this.updateCart();
    }
  }

  decreaseQuantity(productId: number): void {
    const item = this.cartItems.find(p => p.id_product === productId);
    if (item && item.quantity > 1) {
      item.quantity--;
      this.updateCart();
    } else {
      this.removeFromCart(item!);
    }
  }

  removeFromCart(product: CartItem): void {
    this.cartItems = this.cartItems.filter(item => item.id_product !== product.id_product);
    this.updateCart();
  }
  
  clearCart(): void {
    this.cartItems = [];
    this.updateCart();
  }

  getTotalQuantity(): number {
    return this.cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}