import { Season } from "./seasson";

export interface Episode {
  _id: string;
  title: string;
  slug: string;
  number: number;
  body: string;
  type: string;
  time: string;
  season: Season;

  downloadCount: number;
  commentCount: number;
  videoUrl: string;
}
