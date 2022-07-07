import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CommonServiceService } from 'src/app/services/common-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  subTotal=0;
  products: any;
  total:any;
  braceletsCount=0;
  ringsCount: any;
  necklaceCount=0;
  earringsCount=0;
  discountValue: any;
  totalPrice: any;
  isCouponApplied: boolean=true;

  constructor(private addToCartService:AddToCartService,
    private commonService:CommonServiceService,
    private toast:NgToastService) { }

  ngOnInit(): void {
      this.products=this.addToCartService.getProduct();
      console.log("model data",this.products);

      this.totalPrice=this.getTotal(this.products);

      this.products.forEach((item: any) => {
        let product_name = item.name;
        let product_index = product_name.search('Bracelet');
        if (product_index !== -1) {
          this.braceletsCount++;
        }
      });
      this.products.forEach((item: any) => {
        let product_name = item.name;
        let product_index = product_name.search('Earrings');
        if (product_index !== -1) {
          this.earringsCount++;
        }
      });
      this.products.forEach((item: any) => {
        let product_name = item.name;
        let product_index = product_name.search('Necklace');
        if (product_index !== -1) {
          this.necklaceCount++;
        }
      });
      this.products.forEach((item: any) => {
        let product_name = item.name;
        let product_index = product_name.search('Ring');
        if (product_index !== -1) {
          this.ringsCount++;
        }
      });
  }

  getTotal(products:any){
    let sub=0;
    products.forEach((item:any)=>{
      sub=sub+Number(item.price);
      console.log(sub);
    })
    return sub;
  }

  applyCoupon(value: any) {
    if (value === 10 && this.earringsCount >= 1) {
      console.log(this.totalPrice);
      this.discountValue = (value / 100) * this.totalPrice;
      console.log(this.discountValue);
      this.totalPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = false;
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Coupon Applied',
        duration: 5000,
      });
    } else if (value === 20 && this.necklaceCount >= 2) {
      this.discountValue = (value / 100) * this.totalPrice;
      this.totalPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = false;
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Coupon Applied',
        duration: 5000,
      });
    } else if (value === 15 && this.ringsCount >= 1) {
      this.discountValue = (value / 100) * this.totalPrice;
      this.totalPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = false;
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Coupon Applied',
        duration: 5000,
      });
    } else if (value === 25 && this.braceletsCount >= 2) {
      this.discountValue = (value / 100) * this.totalPrice;
      this.totalPrice = this.totalPrice - this.discountValue;
      this.isCouponApplied = false;
      this.toast.success({
        detail: 'SUCCESS',
        summary: 'Coupon Applied',
        duration: 5000,
      });
    } else {
      this.toast.warning({
        detail: 'Invalid Coupon',
        summary: 'Please check coupon conditions',
        duration: 5000,
      });
    }
  }

  



}
