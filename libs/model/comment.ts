import { Course } from "./course";
import { Episode } from "./episode";
import { userType } from "./user";

export interface Comment {
  _id: string;
  user: userType;
  comment: string;
  parent: Comment;
  approved:boolean
  episode?: Episode;
  course?: Course;
  comments: Comment[];
  createdAt: Date;
  updateAt: Date;
}
