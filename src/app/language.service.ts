import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor() {}

  private languageSubject = new BehaviorSubject<Language>('english');
  private language$ = this.languageSubject.asObservable();

  setLanguage(language: Language) {
    this.languageSubject.next(language);
  }

  getLanguage() {
    return this.language$;
  }
}

export type Language = 'english' | 'spanish';
