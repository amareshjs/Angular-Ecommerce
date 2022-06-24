import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CommonServiceService } from 'src/app/services/common-service.service';
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
  products:any

  constructor(private dataService:DataServiceService,
    private addToCartService: AddToCartService,
    private router:Router,
    private wishlistService:WishlistService,
    private commonService:CommonServiceService) { }

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
  this.products=this.addToCartService.getProduct();
  console.log("model data",this.products);
}
getDiscount(price:any,discount:any){
  return this.commonService.getDiscountedPrice(price,discount)
}

getList(){
  this.products=this.wishlistService.getList();
  console.log("model data",this.products);
}


  

}
