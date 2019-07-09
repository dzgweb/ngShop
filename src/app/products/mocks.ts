import { ProductModel } from './models/product.model';
import { ProductCategory } from './models/category.enum';

export const productsData: ProductModel[] = [
	{
		id: 1,
		title: 'Item 1',
		desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deserunt sapiente doloremque accusamus laboriosam harum rerum
			inventore illum quasi, soluta saepe error, assumenda eius animi veniam quod molestias inima facilis commodi rem vero iste! Obcaecati
			cupiditate voluptatum debitis ullam beatae.`,
		price: 10,
		count: 1,
		images: 'http://via.placeholder.com/400x400',
		category: ProductCategory.Category1,
		isAvailable: true
	},
	{
		id: 2,
		title: 'Item 2',
		desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deserunt sapiente doloremque accusamus laboriosam harum rerum
			inventore illum quasi, soluta saepe error, assumenda eius animi veniam quod molestias inima facilis commodi rem vero iste! Obcaecati
			cupiditate voluptatum debitis ullam beatae.`,
		price: 12,
		count: 1,
		images: 'http://via.placeholder.com/400x400',
		category: ProductCategory.Category2,
		isAvailable: true
	},
	{
		id: 3,
		title: 'Item 3',
		desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deserunt sapiente doloremque accusamus laboriosam harum rerum
			inventore illum quasi, soluta saepe error, assumenda eius animi veniam quod molestias inima facilis commodi rem vero iste! Obcaecati
			cupiditate voluptatum debitis ullam beatae.`,
		price: 7,
		count: 1,
		images: 'http://via.placeholder.com/400x400',
		category: ProductCategory.Category3,
		isAvailable: true
	},
	{
		id: 4,
		title: 'Item 4',
		desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deserunt sapiente doloremque accusamus laboriosam harum rerum
			inventore illum quasi, soluta saepe error, assumenda eius animi veniam quod molestias inima facilis commodi rem vero iste! Obcaecati
			cupiditate voluptatum debitis ullam beatae.`,
		price: 10,
		count: 1,
		images: 'http://via.placeholder.com/400x400',
		category: ProductCategory.Category4,
		isAvailable: true
	},
	{
		id: 5,
		title: 'Item 8',
		desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et deserunt sapiente doloremque accusamus laboriosam harum rerum
			inventore illum quasi, soluta saepe error, assumenda eius animi veniam quod molestias inima facilis commodi rem vero iste! Obcaecati
			cupiditate voluptatum debitis ullam beatae.`,
		price: 5,
		count: 1,
		images: 'http://via.placeholder.com/400x400',
		category: ProductCategory.Category5,
		isAvailable: true
	}
];
