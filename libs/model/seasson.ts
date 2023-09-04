import { Course } from "./course";
import { Episode } from "./episode";

export interface Season {
  _id: string;
  course: Course;
  title: string;
  number: number;
  episodes:Episode[]
}
