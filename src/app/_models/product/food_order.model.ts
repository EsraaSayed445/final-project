import { Order } from "./order.model";
import { Product } from "./product.model";

export interface Food_Order{
    food:Product[],
     order:Order[]
}

export interface AllOrderResponse{
  data:Food_Order[];
}
