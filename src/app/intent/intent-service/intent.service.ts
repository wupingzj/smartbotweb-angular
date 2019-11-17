import { Injectable, isDevMode } from '@angular/core';
import { Intent } from './intent.model';
import { Observable, from, of, throwError } from 'rxjs';
import { catchError, retry, tap, map } from 'rxjs/operators';
import { HttpClientModule, HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { errorHandler } from '@angular/platform-browser/src/browser';

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

  getIntents(): Observable<Intent[]> {
    if (isDevMode()) {
      // get from mock json file
      return this.getIntentsFromMockJsonFile();
    } else {
      // get from production server
      return this.getIntentsFromServer();
    }
  }

  private getIntentsFromMockJsonFile(): Observable<Intent[]> {
    return this.http.get<Intent[]>('assets/intents.json');
  }

  private getIntentsFromServer(): Observable<Intent[]> {
    const baseUrl = environment.serverURL;

    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    const url = `${baseUrl}` + '/intents';
    console.log('url for getting intents:', url);

    return this.http.get<Intent[]>(url, httpOptions)
      .pipe(
        tap(data => {
          console.log('fetched intents', data);
        }),
        retry(3),
        map(data => {
          return data;
        }),
        catchError(err => this.handleError(err))
      );
  }

  updatePhrase(intent: Intent): Observable<Intent> {
    const baseUrl = environment.serverURL;

    const request = 'This is my dummy request';
    // const body = JSON.stringify(request);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    const url = `${baseUrl}` + '/intent';

    return this.http.post<Intent>(url, intent, httpOptions)
      .pipe(
        tap(data => {
          console.log('fetched intents', data);
        }),
        retry(3),
        map(data => {
          // demon of data conversion
          return data;
        }),
        catchError(err => this.handleError(err))
      );
  }

  // Error inspection, interpretation, and resolution is something you want to do in the service, not in the component.
  // https://angular.io/guide/http
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Service: Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
// baseUrl = 'https://jsonplaceholder.typicode.com'