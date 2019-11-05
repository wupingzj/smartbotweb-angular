import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public name = 'SmartBot';
  private slogan = 'your secret weapon for building a smart bot!';
  private promotion = 'Try free for 30 days';

  constructor(private location: Location, private router: Router) {}

  isHomePage() {
    const url = this.router.url;
    // console.log('promotion=' + this.promotion);
    return url === '/';
  }
}
