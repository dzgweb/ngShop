import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// rxjs
import { Observable, Subscription} from 'rxjs';

import { ProductModel, ProductsService, ProductPromiseService } from '../../../products/';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  products$: Observable<Array<ProductModel>>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private productsPromiseService: ProductPromiseService
  ) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  onAddProduct() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  onUpdateProduct(product: ProductModel) {
    const link = ['edit', product.id];
    this.router.navigate(link, {relativeTo: this.route});
  }

  onDeleteProduct(product: ProductModel) {
    this.productsPromiseService.deleteProduct(product);
  }

}
