import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { ToastService } from 'src/app/services/toast.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  eData:any
  bData:any
  nData:any
  rData:any
  wishProducts:any
  cartProducts:any
  cartItemList: any;

  constructor(private dataService:DataServiceService,
    private addToCartService: AddToCartService,
    private router:Router,
    private wishlistService:WishlistService,
    private commonService:CommonServiceService,
    private toast:NgToastService) { 

    }

  ngOnInit(): void {

    this.dataService.getEarrings().subscribe(
      val => 
      this.eData=val
    );

    this.dataService.getBracelates().subscribe(
      val => 
      this.bData=val
    );

    this.dataService.getNacklaces().subscribe(
      val => 
      this.nData=val
    );

    this.dataService.getRings().subscribe(
      val => 
      this.rData=val
    );  
  }
getData(){
  // this.products=this.addToCartService.getProduct();
  // console.log("model data",this.products);
    this.addToCartService.cartProductList.subscribe((res)=>{
    console.log(res);
    this.cartProducts=res;
  })
}
getDiscount(price:any,discount:any){
  return this.commonService.getDiscountedPrice(price,discount)
}

getList(){
  // this.products=this.wishlistService.getList();
  // console.log("model data",this.products);
  this.wishlistService.wishProductList.subscribe((res)=>{
    this.wishProducts=res;
  })
}

removeProduct(productId: any) {
  let previousList = localStorage.getItem('list');
  if (
    previousList !== undefined &&
    previousList !== null &&
    previousList.length !== 0
  ) {
    this.cartItemList = JSON.parse(previousList);
    console.log("remove",this.cartItemList);
    // this.cartItemList.splice(productId,1);
    this.cartItemList.map((item: any, index: any) => {

      if (item.id == productId) {

        this.cartItemList.splice(index, 1);
      }
    });
  }
  this.wishlistService.wishProductList.next(this.cartItemList);
  localStorage.setItem('list', JSON.stringify(this.cartItemList));
  this.toast.success({
    detail: 'SUCCESS',
    summary: 'Product Removed',
    duration: 5000,
  });
}


removeCartProduct(productId: any) {
  console.log(productId)
  let previousList = localStorage.getItem('product');
  if (
    previousList !== undefined &&
    previousList !== null &&
    previousList.length !== 0
  ) {
    this.cartItemList = JSON.parse(previousList);
    console.log("remove",this.cartItemList);
    this.cartItemList.map((item: any, index: any) => {

      if (item.id == productId){
        this.cartItemList.splice(index, 1);
      }
    });
  }
  this.addToCartService.cartProductList.next(this.cartItemList);
  localStorage.setItem('product', JSON.stringify(this.cartItemList));
  this.toast.success({
    detail: 'SUCCESS',
    summary: 'Product Removed',
    duration: 5000,
  });
}

  

}
