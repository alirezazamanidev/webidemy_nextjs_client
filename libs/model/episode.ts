import { Course } from "./course";
import { userType } from "./user";

export interface Episode {
  _id: string;
  title: string;
  slug: string;
  number: number;
  body: string;
  type: string;
  time: string;
  course: Course;
  Download: (user: userType) => string;
  downloadCount: number;
  commentCount: number;
  videoUrl: string;
}
