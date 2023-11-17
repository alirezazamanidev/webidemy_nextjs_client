import { Category } from "./category";

import { userType } from "./user";
export interface Blog {
  _id: string;
  isPublished: boolean;
  category: Category;
  author: userType;
  likedUserList:string[]
  
  title: string;
  slug: string;
  comments: Comment[];
  GradientCardBlog: {
    toColor: string;
    fromColor: string;
  }
  description: string;
  tags: string;
  photos: any;
 studyTime:string

  viewCount: number;
  commentCount: number;
  createdAt: Date;
  updatedAt: Date;
}
