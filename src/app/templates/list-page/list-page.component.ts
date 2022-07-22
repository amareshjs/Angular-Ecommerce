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
  products: any[] = [];
  bracelates: any[] = [];
  necklaces: any[] = [];
  rings: any[] = [];
  earrings: any[] = [];


  constructor(private dataService: DataServiceService) { }

  ngOnInit(): void {

    this.dataService.getProducts().subscribe((val) => {
      this.products = val;
      console.log(this.products);
      this.getFilterd(this.products);
    })
  }

  getFilterd(data: any) {
    data.filter((element: any) => {
      if (element.type === "bracelets") {
        this.bracelates.push(element);

      }
      else if (element.type === "rings") {
        this.rings.push(element);
      }
      else if (element.type === "necklaces") {
        this.necklaces.push(element);
      }
      else if (element.type === "earrings") {
        this.earrings.push(element);
      }
    })
    console.log(this.bracelates,this.rings,this.necklaces,this.earrings)
  }


}

