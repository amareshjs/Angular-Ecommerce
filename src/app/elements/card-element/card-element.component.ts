import { Component, Input, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent implements OnInit {

  constructor(private addToCartService: AddToCartService,
    private wishlistService:WishlistService,
    private toast: NgToastService) { }

  ngOnInit(): void {
    console.log(this.products,"card element")
  }

  @Input() products:any[]=[];




  singleProduct:any
addToCart(id:any){
this.singleProduct=this.products.filter((element:any)=>{
  return element['id']== id; 
});
this.addToCartService.setProduct(this.singleProduct[0]);
this.toast.success({detail:"SUCCESS",summary:'Added in Cart',duration:5000});
}
listProduct:any
addToList(id:any){

  this.listProduct=this.products.filter((element:any)=>{
    return element['id']== id; 
  });
  this.wishlistService.setList(this.listProduct[0]);
  this.toast.success({detail:"SUCCESS",summary:'Added in Wishlist',duration:5000});
  }
}
