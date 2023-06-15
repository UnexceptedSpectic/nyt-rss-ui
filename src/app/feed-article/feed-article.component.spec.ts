import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedArticleComponent } from './feed-article.component';

describe('FeedArticleComponent', () => {
  let component: FeedArticleComponent;
  let fixture: ComponentFixture<FeedArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedArticleComponent]
    });
    fixture = TestBed.createComponent(FeedArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
