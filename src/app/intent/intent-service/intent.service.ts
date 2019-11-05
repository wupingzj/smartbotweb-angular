import { Injectable } from '@angular/core';
import { Intent } from './intent.model';
import { Observable, from, of } from 'rxjs';
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
      ]
  },
  {
    name: 'Departure Airport',
    phrases:
      [
        'I am departing from Sydney',
        'Departing from Melbourne',
        'from Brisbane'
      ]
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
  // courses$: Observable<Course[]>;

  constructor(private http: HttpClient) { }

  // getIntents(): Intent[] {
  //   return INTENTS_MOCK;
  // }
  getIntentsA(): Intent[] {
    // Create an Observable out of a promise
    const data = from(fetch('/api/endpoint'));
    // Subscribe to begin listening for async result
    // return data.subscribe({
    //   next(response) { console.log(response); },
    //   error(err) { console.error('Error: ' + err); },
    //   complete() { console.log('Completed'); }
    // });

    const intentsObservable = this.http.get('assets/intents.json');
    intentsObservable.subscribe((intents: Intent[]) => {
      intents.forEach(intent => {
        console.log('intent name=' + intent.name);
        console.log('intent phrases=' + intent.phrases);
      });
    }, err => {
      console.log(err);
    });

    return INTENTS_MOCK;
  }

  getIntentsBOK(): Intent[] {
    const intentsObservable = this.http.get<Intent[]>('assets/intents.json');
    intentsObservable.subscribe((intents: Intent[]) => {
      intents.forEach(intent => {
        console.log('intent name=' + intent.name);
        console.log('intent phrases=' + intent.phrases);
      });
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        alert('Client-side error occured.');
        console.log('Client-side error occured.');
      } else {
        alert('Server-side error occured.');
        console.log('Server-side error occured.');
      }
    });

    return INTENTS_MOCK;
  }

  getIntents(): Intent[] {
    const intentsObservable = this.http.get<Intent[]>('assets/intents.json');
    intentsObservable.subscribe((intents: Intent[]) => {
      intents.forEach(intent => {
        console.log('intent name=' + intent.name);
        console.log('intent phrases=' + intent.phrases);
      });
    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        alert('Client-side error occured.');
        console.log('Client-side error occured.');
      } else {
        alert('Server-side error occured.');
        console.log('Server-side error occured.');
      }
    });

    // this.callSever();

    return INTENTS_MOCK;
  }


  private extractData(res: Response) {
    const body = res.json();
    return body || {};
  }

  callSever() {
    // const baseUrl = 'http://ping.ai/smartbot/intents';
    const baseUrl = 'assets/intents.json';

    const request = 'This is my dummy request';
    const body = JSON.stringify(request);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    const url = `${baseUrl}`;
    // const url = `${baseUrl}/login`;
    this.http.post(url, body, httpOptions).pipe(
      tap(v => console.log('fetched intents' + v)),
      retry(3),
      // map(this.extractData),
      catchError(this.handleError<any>(`get intents`, []))
    ).subscribe(v => {
      // console.log("********=" + v);
    });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

// For HTTP example
// https://medium.com/codingthesmartway-com-blog/angular-4-3-httpclient-accessing-rest-web-services-with-angular-2305b8fd654b
// https://www.djamware.com/post/5da31946ae418d042e1aef1d/angular-8-tutorial-observable-and-rxjs-examples#observable-rxjs-httpclient