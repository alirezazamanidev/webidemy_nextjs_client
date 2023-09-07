import { Category } from "./category";
import { Season } from "./seasson";
import { userType } from "./user";
export interface Course {
  images: any;
  _id: string;
  category: Category;
  teacher: userType;
  title: string;
  slug: string;
  body: string;
  price: string;
  condition: string;
  description: string;
  tags: string;
  photos: any;
  gradientColorCard: {
    fromColor: string;
    toColor: string;
  };
  time: string;
  type: string;
  seasons: Season[];
  viewCount: number;
  commentCount: number;

  createdAt: Date;
  updatedAt: Date;
}
