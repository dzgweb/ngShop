export interface IProduct {
    id: number;
    title: string;
    desc?: string;
    price: number;
    count: number;
    size?: string;
    images: string;
    isAvailable?: boolean;
}