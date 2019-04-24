export interface PhotoAnswer {
  counts: number;
  images: Photo[];
}

export interface Photo {
  create_date: string;
  glories: [];
  likes: string[];
  url: string;
  views: string[];
  _id: string;
}
