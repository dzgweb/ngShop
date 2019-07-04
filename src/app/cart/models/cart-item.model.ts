import { ICartItem } from './cart-item.interface';

export class CartItemModel implements ICartItem {
	public id: number;
	public name: string;
	public price: number;
	public qty: number;

	constructor(cartItem) {
		this.id = cartItem.id || null;
		this.name = cartItem.name || '';
		this.price = cartItem.price || null;
		this.qty = cartItem.qty || 0;
	}
}