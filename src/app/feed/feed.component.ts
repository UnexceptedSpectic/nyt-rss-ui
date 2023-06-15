import { Component, OnInit } from '@angular/core';
import { NewsArticle } from '../models/NewsArticle';
import { HttpClient } from '@angular/common/http';
import { ApiSuccessResponse } from '../models/ApiSuccessResponse';
import { Language, LanguageService } from '../language.service';
import { environment } from 'src/environment';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  private newsArticles: NewsArticle[] = [];
  private language: Language = 'english';
  public displayedArticles: NewsArticle[] = [];

  constructor(
    private languageService: LanguageService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.languageService.getLanguage().subscribe((language) => {
      this.language = language;
      this.updateDisplayedArticles();
    });
    this.fetchArticles();
  }

  updateDisplayedArticles() {
    switch (this.language) {
      case 'english':
        this.displayedArticles = this.newsArticles.filter(
          (article) => !article.url.includes('/espanol/')
        );
        break;
      case 'spanish':
        this.displayedArticles = this.newsArticles.filter((article) =>
          article.url.includes('/espanol/')
        );
        break;
      default:
        console.error('Enexpected language requested');
    }
  }

  fetchArticles() {
    const url = environment.apiUrl;
    const params = { provider: 'nyt', category: 'technology' };

    this.http.get<ApiSuccessResponse>(url, { params }).subscribe({
      next: (v) => {
        this.newsArticles = v.articles.map((article) => {
          const newsArticle: NewsArticle = {
            ...article,
            date: new Date(Date.parse(article.date)),
            imageUrl: article.imageUrl
              ? article.imageUrl.replace(/moth.*?(?=\.)/, 'jumbo')
              : 'assets/images/image-unavailable.jpeg',
          };
          return newsArticle;
        });
        this.updateDisplayedArticles();
      },
      error: (e) => console.error(e),
      complete: () => console.info('Finished fetching articles'),
    });
  }
}
