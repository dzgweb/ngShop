import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductModel } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() cartItem: ProductModel;
  @Output() deleteItem = new EventEmitter();

  onDeleteItem(): void {
    this.deleteItem.emit(this.cartItem);
  }

}
