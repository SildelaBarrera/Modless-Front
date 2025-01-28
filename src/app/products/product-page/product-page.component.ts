import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../service/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-page',
  imports: [CommonModule],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit {
  product: any;
 
  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    // Obtén el ID de la ruta
    const productId = +this.route.snapshot.paramMap.get('id')!;
    // Busca el producto correspondiente
    this.product = this.productService.getProducts().find(p => p.id_product === productId);
  }
}
