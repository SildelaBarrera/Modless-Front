
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'

export const routes: Routes = [
    {path: "", redirectTo:"/home", pathMatch: 'full'},
    {path: "home", title:"Descubre Modless", component: HomeComponent}
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }