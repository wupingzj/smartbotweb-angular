import { Injectable } from '@angular/core';
import { Language } from './language.model';

export const LANGUAGES: Language[] = [
  {
    index: 0,
    name: '中文',
    code: 'zh_CN',
    flag: 'flag-icon-cn'
  },
  {
    index: 1,
    name: 'English',
    code: 'en_AU',
    flag: 'flag-icon-au'
  }
];

@Injectable({
  // https://angular.io/guide/singleton-services
  // provideIn root makes it a singleton
  providedIn: 'root'
})
export class LanguageService {
  // constructor() { }
  // constructor(private translateService)

  private language: Language;
  public title = ' | SmartBot';

  getCurrentLanguage() {
    return this.language;
  }

  setDetaultLanguage(code: string) {
    for (const language of LANGUAGES) {
      if (language.code === code) {
        this.language = language;

      // TODO
      // this.translateService.use(this.language.code);
      // this.saveService.saveLanguageSetting(this.language.code);
      }
    }
  }

  getLanguageArray(): Language[] {
    return LANGUAGES;
  }
}

