import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { Observable, Subscription} from 'rxjs';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, ProductsState } from './../../../core/@ngrx';

import { ProductModel } from '../../models/product.model';
import { ProductsService, ProductPromiseService} from '../../services/';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<Array<ProductModel>>;
  products: Promise<Array<ProductModel>>;

  productsState$: Observable<ProductsState>;

  constructor(
    private productsService: ProductsService,
    private productPromiseService: ProductPromiseService,
    private cartService: CartService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    // this.products$ = this.productsService.getProducts();
    this.products = this.productPromiseService.getProducts();

    // reading data from the Store
    this.productsState$ = this.store.pipe(select('products'));
  }

  onBuyProduct(product: ProductModel) {
    this.cartService.addItem(product);
  }

  onClickProduct(product: ProductModel) {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }

}
