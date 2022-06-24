import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  productList: any=[];
  localData:any;

  constructor() { }

  setList(product:any){

    let previousdata=localStorage.getItem('list');
    if(previousdata!== undefined && previousdata!==null && previousdata.length!==0){
      this.productList=JSON.parse(previousdata);
    }
    this.productList.push(product);
    console.log("aarr",this.productList);
    localStorage.setItem('list',JSON.stringify(this.productList));
  }

  getList(){
    this.localData=localStorage.getItem('list');
   return JSON.parse(this.localData)
  }



}
