import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(cartProducts) {
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }

  getItem() {
    return JSON.parse(localStorage.getItem('cartProducts'));
  }

  hasItem() {
    if(localStorage.getItem('cartProducts')){
      return true;
    }
    return false;
  }
  
}
