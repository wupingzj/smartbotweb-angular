import { Component, OnInit, Input } from '@angular/core';
import { Intent } from '../intent-service/intent.model';
import { interval, from } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-intent-action',
  templateUrl: './intent-action.component.html',
  styleUrls: ['./intent-action.component.css']
})
export class IntentActionComponent implements OnInit {
  @Input() intent: Intent;

  constructor() { }

  ngOnInit() {
  }

  detect() {
    alert('detect intent=' + this.intent.name);
    console.log('route to intent detection page=' + this.intent.name);
  }

  delete() {
    alert('delete intent=' + this.intent.name);
    console.log('make a call to backend service to delete intent=' + this.intent.name);
  }

  manageResponses() {
    // alert('respond intent=' + this.intent.name);
    alert('manage responses for intent=' + this.intent.name);

    // test observable
    const supplier = interval(200).pipe(take(3)); // Observable, take first 3
    const consumer = supplier.subscribe( (v: any) => console.log('Subscribed value:' + v)); // Subscriber
    // setTimeout(()=> consumer.unsubscribe(), 2000);
  }
}
