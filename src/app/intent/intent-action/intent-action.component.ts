import { Component, OnInit, Input } from '@angular/core';
import { Intent } from '../intent-service/intent.model';
// import { interval, from } from 'rxjs';
// import { take } from 'rxjs/operators';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras
} from '@angular/router';

@Component({
  selector: 'app-intent-action',
  templateUrl: './intent-action.component.html',
  styleUrls: ['./intent-action.component.css']
})
export class IntentActionComponent implements OnInit {
  @Input() intent: Intent;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  delete() {
    alert('make a call to backend service to delete intent=' + this.intent.name);
    console.log('make a call to backend service to delete intent=' + this.intent.name);
  }

  manageResponses() {
    // alert('manage responses for intent=' + this.intent.name);
    const navigationExtras: NavigationExtras = {
      queryParams: { intent: this.intent.name },
      fragment: 'anchor'
    };

    // Navigate to the phrase page with extras
    this.router.navigate(['/intentResponses'], navigationExtras);
    return false;

    // test observable
    // const supplier = interval(200).pipe(take(3)); // Observable, take first 3
    // const consumer = supplier.subscribe( (v: any) => console.log('Subscribed value:' + v)); // Subscriber
    // setTimeout(()=> consumer.unsubscribe(), 2000);
  }
}
