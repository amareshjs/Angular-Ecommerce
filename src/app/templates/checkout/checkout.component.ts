import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  subTotal:any;
  products: any;
  total:any;

  constructor(private addToCartService:AddToCartService,
    private commonService:CommonServiceService) { }

  ngOnInit(): void {
      this.products=this.addToCartService.getProduct();
      console.log("model data",this.products);
  }
  getTotal(){
    
  }

  // getDiscount(price:any,discount:any){
  //   return this.commonService.getDiscountedPrice(price,discount)
  // }



}
