import { Injectable } from '@angular/core';
import { LocalStorageService } from '../../core/services/local-storage.service'

import { Observable, of, from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<any> = [];

  constructor(
    private localStorage: LocalStorageService
  ) {
    if ( this.localStorage.hasItem() ) {
      this.cart = this.localStorage.getItem();
    }
  }

  buyProduct(product) {
    console.log(this.cart);
    this.cart.push(product);
    this.localStorage.setItem(this.cart);
  }

  getCart() {
    return this.cart;
  }

}
