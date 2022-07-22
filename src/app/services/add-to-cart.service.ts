import { Injectable } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { BehaviorSubject, Subject } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  productCart: any = [];
  cartItemList:any=[];
  localData: any;
  cartProductList = new BehaviorSubject<any>('');
  cartProductPrice = new BehaviorSubject<number>(0);
  totalCartPrice=new Subject<any>();


  constructor(private sessionService: SessionService) { }

  setProduct(product: any) {

    let previousdata = this.sessionService.getLocalCartData();
    if (previousdata !== undefined && previousdata !== null && previousdata.length !== 0) {
      this.productCart = JSON.parse(previousdata);
    }
    this.productCart.push(product);
    console.log("aarr", this.productCart);
    this.cartProductList.next(this.productCart);
    // localStorage.setItem('product', JSON.stringify(this.productCart));
    this.sessionService.setLocalCartData(JSON.stringify(this.productCart));
  }

  getProduct() {
    let previousdata = this.sessionService.getLocalCartData();
    if (previousdata !== undefined && previousdata !== null && previousdata.length !== 0) {
      this.productCart = JSON.parse(previousdata);
    }
    this.cartProductList.next(this.productCart);
    return this.cartProductList.asObservable();
  }

  getCartPrice(){
    let products;
    let price:number=0;
    let previousdata = this.sessionService.getLocalCartData();
    if (previousdata !== undefined && previousdata !== null && previousdata.length !== 0) {
      products = JSON.parse(previousdata);
    }
    products.forEach((res:any)=>{
      price+=Number( res.price);
    })
    this.cartProductPrice.next(price);
    console.log("prod",price);
    return this.cartProductPrice.asObservable();
  }
  removeCartProduct(productId: any) {
    console.log(productId)
    let previousList = this.sessionService.getLocalCartData()
    // let previousList = pro;
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
    this.cartProductList.next(this.cartItemList);
    this.sessionService.setLocalCartData(JSON.stringify(this.cartItemList));
   
  }
  







}
