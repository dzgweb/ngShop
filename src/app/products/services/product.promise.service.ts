import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ProductModel } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductPromiseService {
  private productsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Promise<ProductModel[]> {
    return this.http
      .get(this.productsUrl)
      .toPromise()
      .then(products => products)
      .catch(this.handleError);
  }

  getProduct(id: number | string): Promise<ProductModel> {
    return this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
