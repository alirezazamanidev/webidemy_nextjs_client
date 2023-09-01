import { Course } from "./course"


export interface Order {
    _id:string
    cart:string
    product:Course;
    createdAt:Date
    updatedAt:Date;

}