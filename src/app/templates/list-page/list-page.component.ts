import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AddToCartService } from 'src/app/services/add-to-cart.service';
import { DataServiceService } from 'src/app/services/data-service.service';
import { WishlistService } from 'src/app/services/wishlist.service';
@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {
  eData: any
  bData: any
  nData: any
  rData: any

  constructor(private dataService: DataServiceService,
    private addToCartService: AddToCartService,
    private wishlistService:WishlistService,
    private toast: NgToastService) { }

  ngOnInit(): void {

    this.dataService.getEarrings().subscribe(
      val =>
        this.eData = val
    );

    this.dataService.getBracelates().subscribe(
      val =>
        this.bData = val
    );

    this.dataService.getNacklaces().subscribe(
      val =>
        this.nData = val
    );

    this.dataService.getRings().subscribe(
      val =>
        this.rData = val
    );
  }

  singleProduct: any
  addToCart(id: any, row: any) {
    if (row == 0) {
      this.singleProduct = this.bData.filter((element: any) => {
        return element['id'] == id;
      });
      this.addToCartService.setProduct(this.singleProduct[0]);
      this.toast.success({detail:"SUCCESS",summary:'Added in Cart',duration:5000});
       
    }

    if (row == 1) {
      this.singleProduct = this.eData.filter((element: any) => {
        return element['id'] == id;
      });
      this.addToCartService.setProduct(this.singleProduct[0]);
      this.toast.success({detail:"SUCCESS",summary:'Added in Cart',duration:5000});
    }

    if (row == 2) {
      this.singleProduct = this.nData.filter((element: any) => {
        return element['id'] == id;
      });
      this.addToCartService.setProduct(this.singleProduct[0]);
      this.toast.success({detail:"SUCCESS",summary:'Added in Cart',duration:5000});
    }

    if (row == 3) {
      this.singleProduct = this.rData.filter((element: any) => {
        return element['id'] == id;
      });
      this.addToCartService.setProduct(this.singleProduct[0]);
      this.toast.success({detail:"SUCCESS",summary:'Added in Cart',duration:5000});
    }



  }


  listProduct: any
  addToList(id: any, row: any) {
    if (row == 0) {
      this.listProduct = this.bData.filter((element: any) => {
        return element['id'] == id;
      });
      this.wishlistService.setList(this.listProduct[0]);
      this.toast.success({detail:"SUCCESS",summary:'Added In Wishlist',duration:5000});
       
    }

    if (row == 1) {
      this.listProduct = this.eData.filter((element: any) => {
        return element['id'] == id;
      });
      this.wishlistService.setList(this.listProduct[0]);
      this.toast.success({detail:"SUCCESS",summary:'Added In Wishlist',duration:5000});
    }

    if (row == 2) {
      this.listProduct = this.nData.filter((element: any) => {
        return element['id'] == id;
      });
      this.wishlistService.setList(this.listProduct[0]);
      this.toast.success({detail:"SUCCESS",summary:'Added In Wishlist',duration:5000});
    }

    if (row == 3) {
      this.listProduct = this.rData.filter((element: any) => {
        return element['id'] == id;
      });
      this.wishlistService.setList(this.listProduct[0]);
      this.toast.success({detail:"SUCCESS",summary:'Added In Wishlist',duration:5000});
    }



  }



}
