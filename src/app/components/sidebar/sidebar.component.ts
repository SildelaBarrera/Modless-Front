import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements AfterViewInit {
  @ViewChild('navbar') navbar!: ElementRef; // Referencia a la navbar
  @ViewChild('collapse') collapse!: ElementRef; // Referencia al menú colapsable

  ngAfterViewInit(): void {
    const navbarElement = this.navbar.nativeElement;
    const collapseElement = this.collapse.nativeElement;

    // Detectar el evento "show.bs.collapse" (cuando se abre el menú)
    collapseElement.addEventListener('show.bs.collapse', () => {
      navbarElement.classList.remove('bg-transparent'); // Quitar fondo transparente
      navbarElement.classList.add('bg-white'); // Añadir fondo blanco
      navbarElement.classList.add('navbar-light'); // Cambiar texto a oscuro
      navbarElement.classList.add('dropdown-item-light'); // Cambiar texto a oscuro
      navbarElement.classList.remove('dropdown-item-dark'); //Quitar texto claro
      navbarElement.classList.remove('navbar-dark'); //Quitar texto claro
       
    });

    // Detectar el evento "hide.bs.collapse" (cuando se cierra el menú)
    collapseElement.addEventListener('hide.bs.collapse', () => {
      navbarElement.classList.remove('bg-white'); // Quitar fondo blanco
      navbarElement.classList.add('bg-transparent'); // Añadir fondo transparente
      navbarElement.classList.remove('navbar-light'); // Quitar texto oscuro
      navbarElement.classList.add('navbar-dark'); // Añadir texto claro
      // navbarElement.classList.add('dropdown-menu-dark'); //Quitar texto claro
      // navbarElement.classList.remove('dropdown-menu-light'); //Quitar texto claro
      
    });
  }

}
