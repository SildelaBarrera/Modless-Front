
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductPageComponent } from './products/product-page/product-page.component';

export const routes: Routes = [
    {path: "", redirectTo:"/home", pathMatch: 'full'},
    {path: "home", title:"Descubre Modless", component: HomeComponent},
    {path: "products", title:"Colección", component: ProductListComponent},
    {path: "product/:id", title: "Producto", component:ProductPageComponent}
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }