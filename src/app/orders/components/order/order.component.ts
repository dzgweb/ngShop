import { Component, OnInit, Input } from '@angular/core';

import { OrderModel } from './../../../orders';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  @Input() order: OrderModel;

  constructor() { }

  ngOnInit() {
  }

}
