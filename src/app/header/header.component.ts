import { Component, OnInit } from '@angular/core';
import { Language, LanguageService } from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoSrc = 'assets/images/logo.svg';
  currentDate = new Date();
  language: Language = 'english';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.getLanguage().subscribe((language) => {
      this.language = language;
    });
  }

  isEnglish() {
    return this.language === 'english';
  }
  isSpanish(): any {
    return this.language === 'spanish';
  }
  setEnglish() {
    this.languageService.setLanguage('english');
  }
  setSpanish() {
    this.languageService.setLanguage('spanish');
  }
}
