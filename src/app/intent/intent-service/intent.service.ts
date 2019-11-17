import { Injectable, isDevMode } from '@angular/core';
import { Intent } from './intent.model';
import { Observable, from, of, throwError } from 'rxjs';
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

    return this.http.get<Intent[]>(url, httpOptions);
  }

  postToServer(): Observable<Response> {
    const baseUrl = environment.serverURL;

    const request = 'This is my dummy request';
    const body = JSON.stringify(request);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Accept', 'application/json');

    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    const url = `${baseUrl}` + '/intents';

    return this.http.post<Response>(url, body, httpOptions);
  }
}
// baseUrl = 'https://jsonplaceholder.typicode.com'