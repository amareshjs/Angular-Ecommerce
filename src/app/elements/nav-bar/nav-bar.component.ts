import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { SessionService } from 'src/app/services/session.service';
import { ToastService } from 'src/app/services/toast.service';
import { WishlistService } from 'src/app/services/wishlist.service';
import { DataServiceService } from '../../services/data-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  wishProducts:any
  cartProducts:any
  cartItemList: any;
  products: any[] = [];
  bracelates: any[] = [];
  necklaces: any[] = [];
  rings: any[] = [];
  earrings: any[] = [];
  cartLength=0;
  wishListLength=0;

  constructor(private dataService:DataServiceService,
    private addToCartService: AddToCartService,
    private sessionService:SessionService,
    private router:Router,
    private wishlistService:WishlistService,
    private commonService:CommonServiceService,
    private toast:NgToastService) { 

    }

  ngOnInit(): void {
    
    
    this.dataService.getProducts().subscribe((val)=>{
      this.products=val;
      // console.log(this.products);
      this.getFilterd(this.products);
    })
    this.getData();
  }

  getFilterd(data:any){
    data.filter((element:any)=>{
      if(element.type==="bracelets"){
        this.bracelates.push(element);
  
      }
      else if(element.type==="rings"){
        this.rings.push(element);
      }
      else if(element.type==="necklaces"){
        this.necklaces.push(element);
      }
      else if(element.type==="earrings"){
        this.earrings.push(element);
      }
    })
  }


getData(){
    this.addToCartService.getProduct().subscribe((res)=>{
    // console.log(res);
    this.cartProducts=res;
  })
  this.cartLength=this.cartProducts.length;
  console.log(this.cartLength);
}
getDiscount(price:any,discount:any){
  return this.commonService.getDiscountedPrice(price,discount)
}

getList(){
  this.wishlistService.getList().subscribe((res)=>{
    this.wishProducts=res;
  })
  this.wishListLength=this.wishProducts.length

}

removeProduct(productId: any) {
  console.log(productId)
  
  this.wishlistService.removeWishProduct(productId);
  this.toast.success({
    detail: 'SUCCESS',
    summary: 'Product Removed',
    duration: 5000,
  });
 
}


removeCartProduct(productId: any) {
  console.log(productId)
  
  this.addToCartService.removeCartProduct(productId);
  this.addToCartService.getCartPrice().subscribe((res)=>{});
  this.toast.success({
    detail: 'SUCCESS',
    summary: 'Product Removed',
    duration: 5000,
  });
}

  

}
