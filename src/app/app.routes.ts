import { Routes } from '@angular/router';
import { ProductsList } from './products-list/products-list';
import { Home } from './home/home';
import { About } from './about/about';
import { ProductDetails } from './product-details/product-details';
import { CommandeComponent } from './commandeComponent/commandeComponent';

export const routes: Routes = [
    {
        path : '', component : Home
    },
    {
        path : 'prods', component : ProductsList
    },
    {
        path : 'prods/:id', component : ProductDetails
    },
    {
        path : 'about', component : About
    },
    {
        path : 'commande', component : CommandeComponent
    }
];
