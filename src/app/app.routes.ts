import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: '/test', pathMatch: 'full'},
  {path: 'test', loadComponent: () => import('./components/test/order-coffee.component').then(m => m.OrderCoffeeComponent)},
];
