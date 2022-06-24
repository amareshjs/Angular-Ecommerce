import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  productCart: any=[];
  localData:any;



  constructor() { }

  setProduct(product:any){

    let previousdata=localStorage.getItem('product');
    if(previousdata!== undefined && previousdata!==null && previousdata.length!==0){
      this.productCart=JSON.parse(previousdata);
    }
    this.productCart.push(product);
    console.log("aarr",this.productCart);
    localStorage.setItem('product',JSON.stringify(this.productCart));
  }

  getProduct(){
    this.localData=localStorage.getItem('product');
   return JSON.parse(this.localData)
  }








}
