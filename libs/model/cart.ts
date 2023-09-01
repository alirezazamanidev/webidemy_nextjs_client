import { User } from "next-auth";
import { Course } from "./course";
import { Order } from "./order";

export interface Cart {
  _id: string;
  user: User;
  orders: Order[];
  createdAt: Date;
  updatedAt: Date;
}
