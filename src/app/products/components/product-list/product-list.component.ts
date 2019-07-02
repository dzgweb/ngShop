import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { Observable, Subscription} from 'rxjs';

import { ProductModel } from "./../../models/product.model"
import { ProductsService } from "./../../services/products.service"


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Array<ProductModel>>;

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  onBuyProduct(product) {

    console.log(`product purchased: ${product}`);
  }

}
