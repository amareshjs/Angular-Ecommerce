import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { WishlistService } from 'src/app/services/wishlist.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  row:any;
    products:any;
    

  constructor( private dataService:DataServiceService,
    private activatedRoute: ActivatedRoute,
    private addToCartService:AddToCartService,
    private wishlistService:WishlistService,
    private toast:NgToastService) { }

  ngOnInit(): void {

this.row=this.activatedRoute.snapshot.params['row'];
    
if(this.row==='0'){
  this.dataService.getBracelates().subscribe((val)=>{
    this.products=val;
  })
}

if(this.row==='1'){
  this.dataService.getEarrings().subscribe((val)=>{
    this.products=val;
  })
}

if(this.row==='2'){
  this.dataService.getNacklaces().subscribe((val)=>{
    this.products=val;
  })
}

if(this.row==='3'){
  this.dataService.getRings().subscribe((val)=>{
    this.products=val;
  })
}
}
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
