import { Component, OnInit } from '@angular/core';

// @Ngrx
import { Store, select } from '@ngrx/store';
import { AppState, OrdersState } from './../../../core/@ngrx';

// rxjs
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss']
})
export class ManageOrdersComponent implements OnInit {
  ordersState$: Observable<OrdersState>;

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit() {
    console.log('We have a store! ', this.store);
    this.ordersState$ = this.store.pipe(select('orders'));
  }
}
