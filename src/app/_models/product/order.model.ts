import { Transaction } from "./transaction.model";
import { User } from "./user.model";

export interface Order{
    user:User,
    PaymentStatus:Transaction,
    id:number,
    created_at:string,
    updated_at:string
}
