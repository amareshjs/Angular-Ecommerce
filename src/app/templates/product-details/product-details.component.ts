import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastModule, NgToastService } from 'ng-angular-popup';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { CommonServiceService } from 'src/app/services/common-service.service';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  id: any;
  row: any;
  page: any;
  singleProduct: any;
  discountedPrice: any;
  localdata: any;

  constructor(private activatedRoute: ActivatedRoute,
    private route: Router,
    private dataService: DataServiceService,
    private addtocart: AddToCartService,
    private commonService: CommonServiceService,
    private toast: NgToastService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.page = this.activatedRoute.snapshot.params['page'];
    console.log(this.id)

    this.dataService.getSingleProducts(this.id).subscribe((res: any) => {
      this.singleProduct = res;
      // console.log(this.singleProduct)
      this.discountedPrice = this.commonService.getDiscountedPrice(this.singleProduct.price, this.singleProduct.discount);
    })
  }


  addToCart() {
    this.addtocart.setProduct(this.singleProduct)
    // this.localdata=;
    console.log("local", this.addtocart.getProduct());
    this.toast.success({ detail: "SUCCESS", summary: 'Added in Cart', duration: 5000 });

  }


}
