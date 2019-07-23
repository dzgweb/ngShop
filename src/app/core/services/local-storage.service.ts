import { Injectable } from '@angular/core';

import { CartModel } from '../../cart/models';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(cartProducts: CartModel): void {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  getItem(): CartModel {
    return JSON.parse(localStorage.getItem('cartProducts'));
  }

  clear(): void {
    localStorage.clear();
  }

  hasItem(): boolean {
    if (localStorage.getItem('cartProducts')) {
      return true;
    }
    return false;
  }
}
