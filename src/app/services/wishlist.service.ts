import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  productList: any=[];
  wishItemList:any=[];
  localData:any;
  wishProductList=new BehaviorSubject<any>('');

  constructor(private sessionService:SessionService) { }

  setList(product:any){

    let previousdata=this.sessionService.getLocalListData();
    if(previousdata!== undefined && previousdata!==null && previousdata.length!==0){
      this.productList=JSON.parse(previousdata);
    }
    this.productList.push(product);
    console.log("aarr",this.productList);
    this.wishProductList.next(this.productList);
    // localStorage.setItem('list',JSON.stringify(this.productList));
    this.sessionService.setLocalListData(JSON.stringify(this.productList));
  }

  getList(){
    let previousdata=this.sessionService.getLocalListData();
    if(previousdata!== undefined && previousdata!==null && previousdata.length!==0){
      this.productList=JSON.parse(previousdata);
    }
    this.wishProductList.next(this.productList);
   return this.wishProductList.asObservable();
  }

  removeWishProduct(productId: any) {
    console.log(productId)
    let previousList = this.sessionService.getLocalListData()
    // let previousList = pro;
    if (
      previousList !== undefined &&
      previousList !== null &&
      previousList.length !== 0
    ) {
      this.wishItemList = JSON.parse(previousList);
      console.log("remove",this.wishItemList);
      this.wishItemList.map((item: any, index: any) => {
  
        if (item.id == productId){
          this.wishItemList.splice(index, 1);
        }
      });
    }
    this.wishProductList.next(this.wishItemList);
    this.sessionService.setLocalListData(JSON.stringify(this.wishItemList));
  }



}
