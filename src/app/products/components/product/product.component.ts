import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

import { ProductModel, ProductCategory } from './../../models/';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  ProductCategory = ProductCategory;

  @Input() product: ProductModel;

  @Output() buyProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  onBuyProduct(event: any): void {
    event.stopPropagation();
    this.buyProduct.emit(this.product);
  }
}
