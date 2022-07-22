import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor() { }


  getLocalCartData(){
    return localStorage.getItem('product');
  }

  setLocalCartData(data:any){
    localStorage.setItem('product',data);
    return true;
  }

  getLocalListData(){
    return localStorage.getItem('list');
  }

  setLocalListData(data:any){
    localStorage.setItem('list',data);
    return true;
  }

  
}
