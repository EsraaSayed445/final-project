import { Order } from "./order.model";
import { Product } from "./product.model";

export interface Food_Order{
    food:Product[],
    order:Order[]
}

