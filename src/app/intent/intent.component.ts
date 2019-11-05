import { Component, OnInit } from '@angular/core';
import { IntentService } from './intent-service/intent.service';
import { Intent } from './intent-service/intent.model';

@Component({
  selector: 'app-intent',
  templateUrl: './intent.component.html',
  styleUrls: ['./intent.component.css']
})
export class IntentComponent implements OnInit {
  private intents = [];
  private hoveredIntentName: string;

  constructor(private intentService: IntentService) { }

  ngOnInit() {
    this.intents = this.intentService.getIntents();
  }

  highlightRow(intent: Intent) {
    // console.log('intent=' + intent.name);
    this.hoveredIntentName = intent.name;
  }
  changePhrases(intent: Intent) {
    alert('Change intent' + intent.name);
  }
}
