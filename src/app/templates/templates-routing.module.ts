import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsModule } from '../elements/elements.module';
import { AllProductsComponent } from './all-products/all-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ListPageComponent } from './list-page/list-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
const routes: Routes = [
  {
    path: 'singleproduct/:id/:row',
    component: ProductDetailsComponent,
  },
  {
    path: 'singleproduct/:id/:row/:page',
    component: ProductDetailsComponent,
  },
  {
    path: 'home',
    component: ListPageComponent,
  },
  {
    path: 'products/necklace/:row',
    component: AllProductsComponent,
  },
  {
    path: 'products/bracelate/:row',
    component: AllProductsComponent,
  },
  {
    path: 'products/ring/:row',
    component: AllProductsComponent,
  },
  {

    path: 'products/earring/:row',
    component: AllProductsComponent,
  },
  {

    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: '',redirectTo:'home',pathMatch:'full',
    
  },
  
];
@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ElementsModule],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }







