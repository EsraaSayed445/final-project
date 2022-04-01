import { Product } from "./product.model";
import { User } from "./user.model";

export interface rating {
    food: Product,
    user: User,
    rating: number,    
    created_at:string,
    updated_at:string
}
