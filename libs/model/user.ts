import { Course } from "./course";
import { Order } from "./order";

export interface userType {
  _id: string;
  fullname:string
  username: string;
  email: string;
  active: boolean;
  isVip: boolean;
  vipTime: Date;
  admin: boolean;
  orders: Order[];
  learning: Course[];
  createdAt: string;
  updatedAt: string;
}
