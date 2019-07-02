import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { ProductModel } from "./../models/product.model"
import { productsData } from "./../mocks"

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() {}
  
  getProducts(): Observable<ProductModel[]>{
    return of(productsData);
  }
}
