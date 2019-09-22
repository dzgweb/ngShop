import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// rxjs
import { Observable, Subscription} from 'rxjs';

import { ProductModel, ProductsService } from '../../../products/';

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
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  onAddProduct() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  onUpdateProduct() {

  }

}
