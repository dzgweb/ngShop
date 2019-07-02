import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(product) { 
    localStorage.setItem('orderProducts', JSON.stringify(product));
  }

  getItem() {
    return JSON.parse(localStorage.getItem('orderProducts'));
  }
}
