import { Component, OnInit } from '@angular/core';
import { IntentService } from './intent-service/intent.service';
import { Intent } from './intent-service/intent.model';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras
} from '@angular/router';
import { catchError, tap, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-intent',
  templateUrl: './intent.component.html',
  styleUrls: ['./intent.component.css']
})

export class IntentComponent implements OnInit {
  private intents: Intent[] = [];
  private hoveredIntentName: string;

  constructor(private intentService: IntentService, private router: Router) { }

  ngOnInit() {
    // get data from server
    // this.intentService.getIntentsFromJsonFile()
    this.intentService.getIntents()
      .pipe(
        tap(data => {
          console.log(typeof data);
          console.log('fetched intents', data);
        }),
        // retry(3),
        // map(data => {
        //   console.log('map data', data);
        // }),
        // catchError(this.handleError<any>(`get intents`, []))
      )
      .subscribe(
        data => {
          // console.log('get intents =' + data);
          this.intents = data;
        },
        error => {
          console.error('get intents failed', error);
        },
        () => {
          console.log('get intents finished');
        }
      );
  }

  highlightRow(intent: Intent) {
    this.hoveredIntentName = intent.name;
  }

  changePhrases(intent: Intent): boolean {
    // alert('Change intent' + intent.name);
    // Set our navigation extras object
    // that contains our global query params and fragment
    const navigationExtras: NavigationExtras = {
      queryParams: { intent: intent.name },
      fragment: 'anchor'
    };

    // Navigate to the phrase page with extras
    this.router.navigate(['/intentDetection'], navigationExtras);
    return false;
  }
}
