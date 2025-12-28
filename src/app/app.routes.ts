import { Routes } from '@angular/router';
import { ProductsList } from './products-list/products-list';
import { Home } from './home/home';
import { About } from './about/about';
import { ProductDetails } from './product-details/product-details';
import { Checkout } from './checkout/checkout';

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
        path : 'checkout', component : Checkout
    }
];
