import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

// rxjs
import { Observable, Subscription, of} from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ProductModel, ProductsService, ProductPromiseService } from '../../../products/';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.scss']
})
export class ManageProductsComponent implements OnInit {
  products$: Observable<Array<ProductModel>>;

  private editedProduct: ProductModel;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private productsPromiseService: ProductPromiseService
  ) { }

  ngOnInit() {
    this.products$ = this.productsService.getProducts();

    // listen editedProduct from ProductFormComponent
    this.route.paramMap
    .pipe(
      switchMap((params: ParamMap) => {
        return params.get('editedProductID')
          ? this.productsService.getProduct(+params.get('editedProductID'))
          : of(null);
      })
    )
    .subscribe(
      (product: ProductModel) => {
        this.editedProduct = { ...product };
        console.log(
          `Last time you edited product ${JSON.stringify(this.editedProduct)}`
        );
      },
      err => console.log(err)
    );
  }

  onAddProduct() {
    this.router.navigate(['add'], {relativeTo: this.route});
  }

  onUpdateProduct(product: ProductModel) {
    const link = ['edit', product.id];
    this.router.navigate(link, {relativeTo: this.route});
  }

  onDeleteProduct(product: ProductModel) {
    this.productsPromiseService
    .deleteProduct(product)
    .then(() => (this.products$ = this.productsService.getProducts()))   // update list
    .catch(err => console.log(err));
  }

  isEdited(product: ProductModel): boolean {
    if (this.editedProduct) {
      return product.id === this.editedProduct.id;
    }
    return false;
  }
}
