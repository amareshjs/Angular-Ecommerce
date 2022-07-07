import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  productList: any=[];
  localData:any;
  wishProductList=new BehaviorSubject<any>('');

  constructor() { }

  setList(product:any){

    let previousdata=localStorage.getItem('list');
    if(previousdata!== undefined && previousdata!==null && previousdata.length!==0){
      this.productList=JSON.parse(previousdata);
    }
    this.productList.push(product);
    console.log("aarr",this.productList);
    this.wishProductList.next(this.productList);
    localStorage.setItem('list',JSON.stringify(this.productList));
  }

  getList(){
    this.localData=localStorage.getItem('list');
   return JSON.parse(this.localData)
  }



}
