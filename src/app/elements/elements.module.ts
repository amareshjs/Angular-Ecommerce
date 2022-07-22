import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { CardElementComponent } from './card-element/card-element.component';



@NgModule({
  declarations: [ NavBarComponent, CardElementComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavBarComponent,
    CardElementComponent
  ]
})
export class ElementsModule { }
