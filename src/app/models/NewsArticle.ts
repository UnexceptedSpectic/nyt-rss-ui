export interface NewsArticle {
  url: string;
  title: string;
  date: Date;
  description: string;
  author: string;
  imageUrl: string | null;
  imageDescription: string | null;
}
