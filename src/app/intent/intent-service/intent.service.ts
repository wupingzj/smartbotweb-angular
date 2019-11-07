import { Injectable } from '@angular/core';
import { Intent } from './intent.model';
import { Observable, from, of, throwError } from 'rxjs';
// import { HttpClient, HttpErrorResponse, Headers, RequestOptions, Http, Response } from '@angular/common/http';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, tap, map, retry } from 'rxjs/operators';

export const INTENTS_MOCK: Intent[] = [
  {
    name: 'Welcome',
    phrases:
      [
        'hi',
        'Hi there',
        'hello'
      ],
    responses: []
  },
  {
    name: 'Departure Airport',
    phrases:
      [
        'I am departing from Sydney',
        'Departing from Melbourne',
        'from Brisbane'
      ],
    responses: []
  },
];

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class IntentService {
  private intents: Intent[];

  constructor(private http: HttpClient) { }

  getIntentsFromServer0(): Observable<Intent[]> {
    return this.http.get<Intent[]>('assets/intents.json');
  }

  getIntentsMock(): Intent[] {
    return INTENTS_MOCK;
  }

  callSever() {
    const baseUrl = 'http://ping.ai/smartbot/intents';

    const request = 'This is my dummy request';
    const body = JSON.stringify(request);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    const url = `${baseUrl}`;
    this.http.post(url, body, httpOptions).pipe(
      tap(v => console.log('fetched intents' + v)),
      // retry(3),
      // map(this.extractData),
      // catchError(this.handleError<any>(`get intents`, []))
    ).subscribe(v => {
      // console.log("********=" + v);
    });
  }
}
// baseUrl = 'https://jsonplaceholder.typicode.com'