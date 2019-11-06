import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
import { map, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  private intentName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.intentName = this.route.snapshot.queryParamMap.get('intent');

    // this.route.queryParams.pipe(filter(params => true)).subscribe({
    //   next(a) {
    //     // for debugging
    //     console.log('All query params=' + JSON.stringify(a));
    //   }
    // });

    // Capture the fragment if available
    // this.token = this.route
    //   .fragment
    //   .pipe(map(fragment => fragment || 'None'));
  }

  scrape() {
    this.route.queryParamMap
      .pipe(map(params => params.get('intent'))).subscribe({
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
        this.intentName = a.get('intent');
      }
    });
    setTimeout(() => { sub.unsubscribe(); }, 10000);
    console.log('intentName=' + this.intentName);

    // Example: "/app?param1=hallo&param2=123"

    // param1: string;
    // param2: string;
    // constructor(private route: ActivatedRoute) {
    //     console.log('Called Constructor');
    //     this.route.queryParams.subscribe(params => {
    //         this.param1 = params['param1'];
    //         this.param2 = params['param2'];
    //     });
    // }
    // whereas, the path variables are accessed by "this.route.snapshot.params"

    // Example: "/param1/:param1/param2/:param2"

    // param1: string;
    // param2: string;
    // constructor(private route: ActivatedRoute) {
    //     this.param1 = this.route.snapshot.params.param1;
    //     this.param2 = this.route.snapshot.params.param2;
    // }
  }
}
