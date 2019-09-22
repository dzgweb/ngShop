import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductModel } from './../models/product.model';
// import { productsData } from './../mocks';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = 'http://localhost:3010/products';

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

  updateProduct(product: ProductModel): Observable<ProductModel> {
    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .put<ProductModel>(url, body, options)
      .pipe(catchError(this.handleObservableError));
  }

  addProduct(product: ProductModel): Observable<ProductModel> {
    const url = this.productsUrl;
    const body = JSON.stringify(product);
    const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
    .post<ProductModel>(url, body, options)
    .pipe(catchError(this.handleObservableError));
  }

  private handleObservableError(err: HttpErrorResponse) {
      let errorMessage: string;
      // A client-side or network error occurred.
      if (err.error instanceof Error) {
          errorMessage = `An error occurred: ${err.error.message}`;
      } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Backend returned code ${err.status}, body was: ${
            err.error
          }`;
      }
      console.error(errorMessage);
      return throwError(errorMessage);
  }
}
