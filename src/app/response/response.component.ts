import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, filter } from 'rxjs/operators';
import { nextContext } from '@angular/core/src/render3';
// import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  private intentName: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.pipe(filter(params => params.get('intent') == 'welcome')).subscribe({
      next(a) {
        console.log('00=' + JSON.stringify(a));
        this.intentName = a;
      }
    });

    // Capture the session ID if available
    this.route.queryParamMap
      .pipe(map(params => params.get('intent') || 'None')).subscribe({
        next(a) {
          console.log('aa=' + JSON.stringify(a));
          this.intentName = a;
        }
      });


    this.route.queryParamMap
      .pipe(map(params => params.get('intent') || 'None'))
      .forEach(a => {
        console.log('bb=' + a);
      });


    const sub = this.route.queryParamMap.subscribe({
      next(a) {
        console.log('cc=' + JSON.stringify(a.get('intent')));
      }
    });
    // setTimeout(() => { sub.unsubscribe(); }, 10000);

    // Capture the fragment if available
    // this.token = this.route
    //   .fragment
    //   .pipe(map(fragment => fragment || 'None'));
  }
}
