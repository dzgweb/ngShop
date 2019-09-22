import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// rxjs
import { switchMap } from 'rxjs/operators';

import { ProductModel, ProductsService, ProductPromiseService, ProductCategory } from '../../../products/';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;
  originalProduct: ProductModel;
  category = ProductCategory;
  categoryValues = ProductCategory;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductPromiseService
  ) { }

  ngOnInit() {
    this.product = new ProductModel();

    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) => {
          return params.get('productID')
            ? this.productsService.getProduct(+params.get('productID'))
            : Promise.resolve(null); // when Promise.resolve(null) => task = null => {...null} => {}
        }))
      .subscribe(
        product => {
          this.product = { ...product };
          this.originalProduct = { ...product };
        },
        err => console.log(err)
      );
  }

  onAddProduct() {
    console.log('product creare');
    const product = { ...this.product };

    const method = product.id ? 'updateProduct' : 'addProduct';
    this.productsService[method](product)
      .then(() => this.onGoBack())
      .catch(err => console.log(err));
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }

  categoryKeys(): Array<string> {
    const keys = Object.keys(this.category);
    return keys.slice(keys.length / 2);
  }
}
