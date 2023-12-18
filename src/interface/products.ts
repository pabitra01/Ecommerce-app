interface IProductsState{
    products?:Array<IProduct>
    product?:IProduct
    cart?:Array<number>
    isProductsPending:boolean
    selectedProductId?:number
}
interface IProduct{
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
    isLiked?:boolean
    quantity?:number
}
export type {IProduct,IProductsState}