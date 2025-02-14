import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product'
import { CommonModule } from '@angular/common';
import { ProductsService } from '../service/products.service';
import { RouterLink } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  filteredProducts: any[] = [];
  categories: any[] = [];
  selectedCategory: string = 'Todas';

  constructor( 
    private productService: ProductsService,
    private route: ActivatedRoute
  ){}

    ngOnInit(): void {
      console.log('🟢 ngOnInit() ejecutándose en ProductsListComponent');
      this.products = this.productService.getProducts();
      this.categories = this.productService.getCategories();
      
      this.route.queryParams.subscribe(params => {
        this.selectedCategory = params['category'] || 'Todas';
        this.filterByCategory();
      });
      
    }  
    // onCategorySelected(category: string) {
    //   this.selectedCategory = category;
    //   this.filterByCategory();
    // }
    filterByCategory() {
      this.filteredProducts = this.selectedCategory === 'Todas'
      ? this.products
      : this.products.filter(product => product.category === this.selectedCategory);
      }
     
    
  }


