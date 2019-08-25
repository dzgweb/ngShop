import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductModel } from './../models/product.model';
import { productsData } from './../mocks';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}

  getProducts(): Observable<ProductModel[]> {
    return of(productsData);

    // return this.http
    // .get<ProductModel[]>(this.usersUrl)
    // .pipe(catchError(this.handleError));
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.getProducts()
      .pipe(
        map((products: Array<ProductModel>) => products.find(product => product.id === +id))
      );
  }
}
