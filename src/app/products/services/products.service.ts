import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { map, catchError, retry } from 'rxjs/operators';

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
    .pipe(
      retry(3),  // try 3 time get data
      catchError((err) => throwError('Error in getProducts method'))
    );
  }

  getProduct(id: number): Observable<ProductModel> {
    // return this.getProducts()
    //   .pipe(
    //     map((products: Array<ProductModel>) => products.find(product => product.id === +id))
    //   );
    const url = `${this.productsUrl}/${id}`;

    return this.http.get<ProductModel>(url)
    .pipe(
      retry(3),
      catchError(this.handleError)
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
      .pipe(catchError(this.handleError));
  }

  addProduct(product: ProductModel): Observable<ProductModel> {
    const url = this.productsUrl;
    const body = JSON.stringify(product);
    const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
    .post<ProductModel>(url, body, options)
    .pipe(catchError(this.handleError));
  }

  private handleError(err: HttpErrorResponse) {
    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }
}
