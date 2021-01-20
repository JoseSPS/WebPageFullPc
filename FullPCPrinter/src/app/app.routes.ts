import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductosComponent } from "./components/productos/productos.component";
import { ProductoComponent } from "./components/producto/producto.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const APP_AROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'productos', component: ProductosComponent},
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_AROUTES);