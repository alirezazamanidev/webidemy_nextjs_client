import { Course } from "./course";

export interface userType {
  _id: string;
  fullname: string;
  username: string;
  email: string;
  phone: string;
  avatar: string;
  biography:string
  active: boolean;
  isVip: boolean;
  vipTime: Date;
  admin: boolean;
  learning: Course[];
  createdAt: string;
  updatedAt: string;
}
