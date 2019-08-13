import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, HostBinding } from '@angular/core';

import { ProductModel } from '../../../products/models/product.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent {
  @Input() cartItem: ProductModel;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() deleteItem = new EventEmitter();
  @Output() qtyItem = new EventEmitter();

  @HostBinding('class')
  className = 'list-group-item';

  onDeleteItem(): void {
    this.deleteItem.emit(this.cartItem);
  }

  onQtyPlus(): void {
    this.increment.emit(this.cartItem);
  }

  onQtyMinus(): void {
    this.decrement.emit(this.cartItem);
  }

  onQtyChange(): void {
    this.qtyItem.emit(this.cartItem);
  }
}
