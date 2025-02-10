import { Product } from "../products/model/product";

export interface CartItem extends Product {
    quantity: number;  // Cantidad que el usuario quiere comprar
    noStockItem: number;
  }