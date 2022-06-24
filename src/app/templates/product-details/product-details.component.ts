import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id:any;
  row:any;
  page:any;
  singleProduct:any;
  discountedPrice:any;
  localdata:any;

  constructor(private activatedRoute: ActivatedRoute,
    private route: Router,
    private dataService: DataServiceService,
    private addtocart:AddToCartService,
    private commonService:CommonServiceService) { }

  ngOnInit(): void {
    this.id=this.activatedRoute.snapshot.params['id'];
    this.row=this.activatedRoute.snapshot.params['row'];
    this.page=this.activatedRoute.snapshot.params['page'];



    if(this.row=== '0'){
      this.dataService.getSingleBracelate(this.id).subscribe((val)=>{
        this.singleProduct=val;
        console.log(this.singleProduct);
        this.discountedPrice=this.commonService.getDiscountedPrice(this.singleProduct.price,this.singleProduct.discount)

      }
        );
    }

    if(this.row=== '1'){
      this.dataService.getSingleEarring(this.id).subscribe((val)=>{
        this.singleProduct=val;
        console.log(this.singleProduct);
        this.discountedPrice=this.commonService.getDiscountedPrice(this.singleProduct.price,this.singleProduct.discount)
        // this.singleProduct.price-(this.singleProduct.price/this.singleProduct.discount);

      }
        );
    }

    if(this.row=== '2'){
      this.dataService.getSingleNacklace(this.id).subscribe((val)=>{
        this.singleProduct=val;
        console.log(this.singleProduct);
        this.discountedPrice=this.commonService.getDiscountedPrice(this.singleProduct.price,this.singleProduct.discount)

      }
        );
    }

    if(this.row=== '3'){
      this.dataService.getSingleRing(this.id).subscribe((val)=>{
        this.singleProduct=val;
        console.log(this.singleProduct);
        this.discountedPrice=this.commonService.getDiscountedPrice(this.singleProduct.price,this.singleProduct.discount)

      }
        );
    }
  }


 addToCart(){
  this.addtocart.setProduct(this.singleProduct)
  // this.localdata=;
  console.log("local",this.addtocart.getProduct());
 }


}
