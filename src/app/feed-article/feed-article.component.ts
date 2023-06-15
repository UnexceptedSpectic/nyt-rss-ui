import { Component, Input } from '@angular/core';
import { NewsArticle } from '../models/NewsArticle';

@Component({
  selector: 'app-feed-article',
  templateUrl: './feed-article.component.html',
  styleUrls: ['./feed-article.component.scss'],
})
export class FeedArticleComponent {
  @Input() article!: NewsArticle;

  openArticle(): void {
    window.open(this.article.url, '_blank');
  }
}
