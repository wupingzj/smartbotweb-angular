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

  // detect(intent: Intent) {
  //   alert(intent);
  //   alert(this.intent2.name);
  //   console.log('detect intent=' + intent.name);
  // }

  detect() {
    alert('detect intent=' + this.intent.name);
    console.log('detect intent=' + this.intent.name);
  }

  delete() {
    alert('delete intent=' + this.intent.name);
    console.log('delete intent=' + this.intent.name);
  }

  respond() {
    // alert('respond intent=' + this.intent.name);
    console.log('respond intent=' + this.intent.name);

    // test observable
    const supplier = interval(200).pipe(take(3)); // Observable, take first 3
    const consumer = supplier.subscribe( (v: any) => console.log('Subscribed value:' + v)); // Subscriber
    // setTimeout(()=> consumer.unsubscribe(), 2000);
  }
}
