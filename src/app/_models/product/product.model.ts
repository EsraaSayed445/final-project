import { Category } from "./category.model";
import { PaymentType } from "./payment-type.model";
import { ProductLang } from "./product-lang.model";
import {Supplier } from "./supplier.model";
import { Tag } from "./tags.model";

export interface Product{
    id?: number;
    price:number;
    discount?: number;
    imgUrl?:string;
    imagepath?:string;
    supplier?: Supplier;
    name?:string;
    category:Category;
    paymentTypes:PaymentType[];
    description:string;
    // numOfItem: number;
    cartCounter :number;
    category_id:number;
    totalPriceFoodType:number;

}
export interface ProductWithCounter extends Product{
    cartCounter :number;
}
export interface AllProductResponse{
    data:Product[];
}
