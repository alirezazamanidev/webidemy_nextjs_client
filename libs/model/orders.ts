import { Course } from "./course";

export interface Order {
  _id: string;
  user: string;
  course: Course;
  createdAt: Date;
  updatedAt: Date;
}
