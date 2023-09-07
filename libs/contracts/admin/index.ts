export interface CourseFormValuseInterface {
  title: string;
  category: string;
  body: string;
  price?: string;
  photo?: {};
  description: string;
  condition: string;
  fromColor: string;
  toColor: string;
  type: string;
  tags: string;
}

export interface SeasonFormValuseInterface {
  title?: string;
  number?: number;
  course?: string;
}

export interface EpisodeFormValuesInterface {
  season: string;
  title: string;
  body: string;
  type: string;
  time: number;
  video?: {};
  number?: number;
}

export interface categoryFormValuesInterface {
  title: string;
}
