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
    data:ProductLang[];
    name?:string;
    category:Category;
    tags:Tag[];
    paymentTypes:PaymentType[];
    description:string;
  // numOfItem: number;
  cartCounter :number;



}
export interface ProductWithCounter extends Product{
    cartCounter :number;
}
export interface AllProductResponse{
    data:Product[];
}
