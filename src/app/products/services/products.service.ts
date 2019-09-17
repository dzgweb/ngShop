import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductModel } from './../models/product.model';
// import { productsData } from './../mocks';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<ProductModel[]> {
    // return of(productsData);
    return this.http
    .get<ProductModel[]>(this.productsUrl)
    .pipe(catchError((err) => throwError('Error in getProducts method')));
  }

  getProduct(id: number): Observable<ProductModel> {
    return this.getProducts()
      .pipe(
        map((products: Array<ProductModel>) => products.find(product => product.id === +id))
      );
  }
}
