
import { Course } from "./course";
import { Order } from "./order";
import { Cart } from "./cart";

export interface Payment {
  _id: string;
 
  cart: Cart;
  payment: boolean;
  price: number;
  vip: false;
  resnumber:string
  createdAt: Date;
  updatedAt: Date;
}
