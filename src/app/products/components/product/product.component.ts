import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { ProductModel } from './../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  @Input() product: ProductModel;

  @Output() buyProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onBuyProduct(event: any): void {
    event.stopPropagation();
    this.buyProduct.emit(this.product);
  }
}
