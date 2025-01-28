import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product'
import { ProductCardComponent } from '../product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../service/products.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor( private productService: ProductsService){}

    ngOnInit(): void {

      this.products = this.productService.getProducts()
    }    
    
  }


