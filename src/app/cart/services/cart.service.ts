import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage.service';

import { BehaviorSubject } from 'rxjs';

import { CartModel, CartItemModel } from '../models/';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItemModel[] = [];
  cartSum: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(
    private localStorage: LocalStorageService
  ) {

    if ( this.localStorage.hasItem() ) {
      this.cart = this.localStorage.getItem();
    }
  }

  buyProduct(product) {
    this.cart.push(product);
    this.localStorage.setItem(this.cart);

    console.log(this.cart);
  }

  setSum() {
    const sum: number = this.cart.reduce((sum, item) => sum += item.price * item.count, 0);
    this.cartSum.next(sum);
  }

  getSum() {
    return this.cartSum;
  }

  getCart() {
    return this.cart;
  }

  removeItem(cartItem) {
    const indx = this.cart.findIndex(item => item.id === cartItem.id);

    if (indx > -1) {
      this.cart.splice(indx, 1);
    }

    this.localStorage.setItem(this.cart);

    this.setSum();
  }

  clearCart() {
    this.cart.length = 0;
    this.localStorage.clear();
  }
}
