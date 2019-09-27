import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProductModel } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductPromiseService {
  private productsUrl = 'http://localhost:3010/products';

  constructor(private http: HttpClient) {}

  getProducts(): Promise<ProductModel[]> {
    return this.http
      .get(this.productsUrl)
      .toPromise()
      .then(products => products as ProductModel[])
      .catch(this.handleError);
  }

  // getProduct(id: number | string): Promise<ProductModel> {
  //   return this.getProducts()
  //     .then(products => products.find(product => product.id === +id))
  //     .catch(this.handleError);
  // }

  getProduct(id: number): Promise<ProductModel> {
    const url = `${this.productsUrl}/${id}`;

    return this.http
      .get(url)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  updateProduct(product: ProductModel): Promise<ProductModel> {
    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  addProduct(product: ProductModel): Promise<ProductModel> {
    const url = this.productsUrl;
    const body = JSON.stringify(product);
    const options = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .post(url, body, options)
      .toPromise()
      .then(response => response as ProductModel)
      .catch(this.handleError);
  }

  deleteProduct(product: ProductModel): Promise<ProductModel> {
    const url = `${this.productsUrl}/${product.id}`;

    return (
      this.http
        .delete(url)
        .toPromise()
        // json-server return empty object
        // so we don't use .then(...)
        .catch(this.handleError)
    );
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
