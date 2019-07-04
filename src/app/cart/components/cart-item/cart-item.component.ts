import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem; 
  @Output() deleteItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onDeleteItem() {
    this.deleteItem.emit(this.cartItem);
  }

}
