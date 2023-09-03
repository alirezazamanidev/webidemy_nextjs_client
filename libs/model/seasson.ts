import { Course } from "./course";

export interface Season {
  _id: string;
  course: Course;
  title: string;
  number: number;
}
