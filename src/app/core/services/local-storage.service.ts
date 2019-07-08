import { Injectable } from '@angular/core';

import { ProductModel } from './../../products/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(cartProducts: ProductModel) {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  getItem() {
    return JSON.parse(localStorage.getItem('cartProducts'));
  }

  clear() {
    localStorage.clear();
  }

  hasItem() {
    if (localStorage.getItem('cartProducts')) {
      return true;
    }
    return false;
  }
}
