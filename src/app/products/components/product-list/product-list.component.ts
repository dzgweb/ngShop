import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// rxjs
import { Observable, Subscription} from 'rxjs';

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

  constructor(
    private productsService: ProductsService,
    private productPromiseService: ProductPromiseService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.products$ = this.productsService.getProducts();
    this.products = this.productPromiseService.getProducts();
  }

  onBuyProduct(product: ProductModel) {
    this.cartService.addItem(product);
  }

  onClickProduct(product: ProductModel) {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }

}
