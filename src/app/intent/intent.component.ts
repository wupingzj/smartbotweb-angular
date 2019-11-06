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

@Component({
  selector: 'app-intent',
  templateUrl: './intent.component.html',
  styleUrls: ['./intent.component.css']
})
export class IntentComponent implements OnInit {
  private intents = [];
  private hoveredIntentName: string;
  private currentIntent = 'Welcome Test Intent';

  constructor(private intentService: IntentService, private router: Router) { }

  ngOnInit() {
    this.intents = this.intentService.getIntents();
  }

  highlightRow(intent: Intent) {
    this.hoveredIntentName = intent.name;
  }

  changePhrases(intent: Intent): boolean {
    alert('Change intent' + intent.name);
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
