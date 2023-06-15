import { NewsArticle } from './NewsArticle';

export interface ApiSuccessResponse {
  provider: string;
  category: string;
  articles: NewsArticleNoDate[];
}

type DateString = {
  date: string;
};

type NewsArticleNoDate = Omit<NewsArticle, 'date'> & DateString;
