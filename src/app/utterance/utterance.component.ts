import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, ActivatedRouteSnapshot } from '@angular/router';
import { map, switchMap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-utterance',
  templateUrl: './utterance.component.html',
  styleUrls: ['./utterance.component.css']
})
export class UtteranceComponent implements OnInit {
  private intentName: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.intentName = this.route.snapshot.queryParamMap.get('intent');
  }

}
