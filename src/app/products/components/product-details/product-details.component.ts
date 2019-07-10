import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';

import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: ProductModel = new ProductModel();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap((params: Params) => {
          return this.productsService.getProduct(+params.get('productID'));
        })
      )
      .subscribe(
        (product: ProductModel) => this.product = {...product},
        err => console.log(err)
      );
  }

  onGoBack() {
    // window.history.back();
    this.router.navigate(['/home']);
  }

  onBuyProduct() {
    this.cartService.addItem(this.product);
  }
}
