import { userType } from "./user";

export interface Comment {
  _id: string;
  user: userType;
  comment: string;
  parent: Comment;
  episode?: string;
  course?: string;
  comments: Comment[];
  createdAt: Date;
  updateAt: Date;
}
