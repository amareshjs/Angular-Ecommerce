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
  subTotal = 0;
  products: any;
  total: any;
  braceletsCount = 0;
  ringsCount = 0;
  necklaceCount = 0;
  earringsCount = 0;
  discountValue: any;
  totalPrice: any;
  isCouponApplied: boolean = false;
  couponCode = "";

  constructor(private addToCartService: AddToCartService,
    private commonService: CommonServiceService,
    private toast: NgToastService) { }

  ngOnInit(): void {
    this.addToCartService.getProduct().subscribe((res) => {
      this.products = res;
    });
    console.log("model data", this.products);

    this.addToCartService.getCartPrice().subscribe((res) => {
      this.totalPrice = res;
    })

    this.products.forEach((item: any) => {
      if (item.type == "rings") {
        this.ringsCount++;
      }
      else if (item.type == "necklaces") {
        this.necklaceCount++;
      }
      else if (item.type == "earrings") {
        this.earringsCount++;
      }
      else if (item.type == "bracelets") {
        this.braceletsCount++;
      }
    });

    console.log(this.ringsCount, this.necklaceCount, this.earringsCount, this.braceletsCount);
  }

  // getTotal(products:any){
  //   let sub=0;
  //   products.forEach((item:any)=>{
  //     sub=sub+Number(item.price);
  //     console.log(sub);
  //   })
  //   return sub;
  // }

  removeCartProduct(productId: any) {
    console.log(productId)

    this.addToCartService.removeCartProduct(productId);
    this.addToCartService.getCartPrice().subscribe((res) => { });
    this.toast.success({
      detail: 'SUCCESS',
      summary: 'Product Removed',
      duration: 5000,
    });
  }
  // applyCoupon(value: any) {
  //   if (value === 10 && this.earringsCount >= 1) {
  //     console.log(this.totalPrice);
  //     this.discountValue = (value / 100) * this.totalPrice;
  //     console.log(this.discountValue);
  //     this.totalPrice = this.totalPrice - this.discountValue;
  //     this.isCouponApplied = false;
  //     this.toast.success({
  //       detail: 'SUCCESS',
  //       summary: 'Coupon Applied',
  //       duration: 5000,
  //     });
  //   } else if (value === 20 && this.necklaceCount >= 2) {
  //     this.discountValue = (value / 100) * this.totalPrice;
  //     this.totalPrice = this.totalPrice - this.discountValue;
  //     this.isCouponApplied = false;
  //     this.toast.success({
  //       detail: 'SUCCESS',
  //       summary: 'Coupon Applied',
  //       duration: 5000,
  //     });
  //   } else if (value === 15 && this.ringsCount >= 1) {
  //     this.discountValue = (value / 100) * this.totalPrice;
  //     this.totalPrice = this.totalPrice - this.discountValue;
  //     this.isCouponApplied = false;
  //     this.toast.success({
  //       detail: 'SUCCESS',
  //       summary: 'Coupon Applied',
  //       duration: 5000,
  //     });
  //   } else if (value === 25 && this.braceletsCount >= 2) {
  //     this.discountValue = (value / 100) * this.totalPrice;
  //     this.totalPrice = this.totalPrice - this.discountValue;
  //     this.isCouponApplied = false;
  // this.toast.success({
  //   detail: 'SUCCESS',
  //   summary: 'Coupon Applied',
  //   duration: 5000,
  // });
  //   } else {
  //     this.toast.warning({
  //       detail: 'Invalid Coupon',
  //       summary: 'Please check coupon conditions',
  //       duration: 5000,
  //     });
  //   }
  // }


  applyCoupon(data: any) {
    let obj = {
      necklaceCount: this.necklaceCount,
      braceletsCount: this.braceletsCount,
      ringsCount: this.ringsCount,
      earringsCount: this.earringsCount,
      totalPrice: this.totalPrice,
      discountPercentage: data
    }
    console.log(obj.totalPrice, " ts total")
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(new URL('src/app/services/coupon-worker.worker', import.meta.url));
      worker.onmessage = ({ data }) => {
        let couponData = data;
        console.log(`page got message: ${couponData}`);
        if (couponData) {
          this.totalPrice = couponData.totalPrice;
          this.couponCode = couponData.couponCode;
          this.isCouponApplied = true;
          this.toast.success({
            detail: 'SUCCESS',
            summary: 'Coupon Applied',
            duration: 5000,
          });
        }
        else {
          this.isCouponApplied = false;
          this.toast.error({
            detail: 'ERROR',
            summary: 'Select Valid Coupon',
            duration: 5000,
          });
        }

      };
      worker.postMessage(obj);
    } else {
    }
  }




}
