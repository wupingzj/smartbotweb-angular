import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Language, LanguageService } from '../language-service/index';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


// interface optionSelect {
//   index : number;
//   name: string;
// }

declare var _slaask;

@Component({
  selector: 'app-global-header',
  templateUrl: './global-header.component.html',
  styleUrls: ['./global-header.component.css']
})
export class GlobalHeaderComponent implements AfterViewInit {
  hover = false;

  private languageOptions: Language[] = [];
  private currentLanguage: Language = null;
  public adminAccount = false;
  public activeTab = 1;

  ngOnInit() {
    // this.currencyRate = this.currencyService.getCurrencyRate();
  }

  logout() {
    // this.loginB2BService.logout();
  }

  ngAfterViewInit(): void {
    document.getElementById('my-button').addEventListener('click', event => {
      _slaask.show();
    });
  }

  constructor(private router: Router, private languageService: LanguageService, private aglocation: Location) {
    this.currentLanguage = languageService.getCurrentLanguage();
    this.languageOptions = languageService.getLanguageArray();
  }

  selectLanguage(index: string | number) {
    // let oldLanguageCode = this.languageService.getCurrentLanguage().code;
    const oldUrl = this.aglocation.path();
    this.currentLanguage = this.languageOptions[index];
    this.languageService.setDetaultLanguage(this.currentLanguage.code);

    const str = ';lang=' + this.currentLanguage.code;
    if (oldUrl.indexOf(';lang=zh_CN') > 0) {
      const newUrl = oldUrl.replace(';lang=zh_CN', str);
      if (oldUrl.localeCompare(newUrl) !== 0) {
        this.router.navigateByUrl(newUrl);

        setTimeout(() => {
          location.reload();
        }, 1);
      }
    } else if (oldUrl.indexOf(';lang=en_AU') > 0) {
      const newUrl =  oldUrl.replace(';lang=en_AU', str);
      if (oldUrl.localeCompare(newUrl) !== 0) {
        this.router.navigateByUrl(newUrl);

        setTimeout(() => {
            location.reload();
          }, 1);
      }
    } else if (oldUrl.length > 0) {
        const newUrl =  oldUrl + str;
        if (oldUrl.localeCompare(newUrl) !== 0 ) {
          this.router.navigateByUrl(newUrl);
          setTimeout(() => {
              location.reload();
            }, 1);
        }
    } else {
       location.reload();
    }
  }

  openSlack() {
    // let element = document.getElementById('slaask-button-cross"');
    // element.click();
  }
}


