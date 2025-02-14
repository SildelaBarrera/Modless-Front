import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from '../../products/service/products.service';
declare var bootstrap: any;

@Component({
  selector: 'app-sidebar',
  imports: [ CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {

  @Input() categories: string[] = []; //Recibir la lista de categorías
  @Output() categorySelected = new EventEmitter<string>(); //Emitir la categoría seleccionada

  @ViewChild('navbar') navbar!: ElementRef; // Referencia a la navbar
  @ViewChild('collapse') collapse!: ElementRef; // Referencia al menú colapsable
  
  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.categories = this.productsService.getCategories();
    console.log('Categorías recibidas:', this.categories);
  }
  ngAfterViewInit(): void {
    new bootstrap.Collapse(this.collapse.nativeElement, { toggle: false });

     const dropdownToggleList = Array.from(document.querySelectorAll('.dropdown-toggle'));
    dropdownToggleList.forEach((dropdownToggleEl: any) => {
      new bootstrap.Dropdown(dropdownToggleEl);
    });

    const navbarElement = this.navbar.nativeElement;
    const collapseElement = this.collapse.nativeElement;

    // Detectar el evento "show.bs.collapse" (cuando se abre el menú)
    collapseElement.addEventListener('show.bs.collapse', () => {
      navbarElement.classList.remove('bg-transparent'); // Quitar fondo transparente
      navbarElement.classList.add('bg-dark'); // Añadir fondo oscuro
      navbarElement.classList.add('navbar-light'); // Cambiar texto 
      // navbarElement.classList.add('dropdown-item-dark'); // Cambiar texto 
      // navbarElement.classList.add('dropdown-menu-dark');
      // navbarElement.classList.remove('dropdown-item-dark'); //Quitar texto claro
      // navbarElement.classList.remove('navbar-light'); //Quitar texto claro
      
       
    });

    // Detectar el evento "hide.bs.collapse" (cuando se cierra el menú)
    collapseElement.addEventListener('hide.bs.collapse', () => {
      navbarElement.classList.remove('bg-dark'); // Quitar fondo oscuro
      navbarElement.classList.add('bg-transparent'); // Añadir fondo transparente
      navbarElement.classList.remove('navbar-light'); // Quitar texto claro
      // navbarElement.classList.add('navbar-light'); // Añadir texto oscuro
      // navbarElement.classList.add('dropdown-menu-light'); //Quitar texto claro
      // navbarElement.classList.remove('dropdown-item-light'); //Quitar texto claro
      
    });
  }


  selectCategory(category: string) {
    this.categorySelected.emit(category);  // 🔹 Enviar categoría al padre
  }

}
