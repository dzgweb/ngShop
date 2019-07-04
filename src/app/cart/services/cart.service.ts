import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage.service'

import { Observable, of, from} from 'rxjs';

import { CartModel, CartItemModel } from './models/'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartItemModel[] = [];

  constructor(
    private localStorage: LocalStorageService
  ) {
    if ( this.localStorage.hasItem() ) {
      this.cart = this.localStorage.getItem();
    }
  }

  buyProduct(product) {
    console.log(this.cart);
    this.localStorage.setItem(this.cart);
    this.cart.push(product);
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
  }

  clearCart() {
    this.cart.length = 0;
    this.localStorage.clear();
  }
}
