import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TemplateRoutingModule } from './templates-routing.module';
import { ElementsModule } from '../elements/elements.module';
import { ListPageComponent } from './list-page/list-page.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    ProductDetailsComponent,
    ListPageComponent,
    AllProductsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    ElementsModule,
    
  ]
})
export class TemplatesModule { }
