import { Component, Input, OnInit } from '@angular/core';
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
  allProducts:any[]=[];
  filterdProduct:any[]=[];
    

  constructor( private dataService:DataServiceService,
    private activatedRoute: ActivatedRoute,
    private addToCartService:AddToCartService,
    private wishlistService:WishlistService,
    private toast:NgToastService) { }

  ngOnInit(): void {
    this.row=this.activatedRoute.snapshot.params['row'];
    this.dataService.getProducts().subscribe((val) => {
      this.allProducts = val;
      console.log(this.allProducts);
      this.getFilterd(this.allProducts);
    })
}

getFilterd(data:any){
  if(this.row==='0'){
    data.filter((element: any) => {
      if (element.type === "bracelets") {
        this.filterdProduct.push(element);
      }
    })
  }
  else if(this.row==='1'){
    data.filter((element: any) => {
      if (element.type === "earrings") {
        this.filterdProduct.push(element);
      }
    })
  }
  
  else if(this.row==='2'){
    data.filter((element: any) => {
      if (element.type === "necklaces") {
        this.filterdProduct.push(element);
      }
    })
  }
  
  else if(this.row==='3'){
    this.allProducts.filter((element: any) => {
      if (element.type === "rings") {
        this.filterdProduct.push(element);
      }
    })
    }
}
singleProduct:any
addToCart(id:any){
this.singleProduct=this.allProducts.filter((element:any)=>{
  return element['id']== id; 
});
this.addToCartService.setProduct(this.singleProduct[0]);
this.toast.success({detail:"SUCCESS",summary:'Added in Cart',duration:5000});
}
listProduct:any
addToList(id:any){

  this.listProduct=this.allProducts.filter((element:any)=>{
    return element['id']== id; 
  });
  this.wishlistService.setList(this.listProduct[0]);
  this.toast.success({detail:"SUCCESS",summary:'Added in Wishlist',duration:5000});
  }
  
}
