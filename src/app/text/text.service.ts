import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TextService {

  // get back end base url
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Call back api to calculate punctuations occurrence
   * @param {string} text
   * @returns {Observable<any>}
   */
  getPunctuationsNumber(text: string): Observable<any> {
    const body = text;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    // use post request to send text in body (in case of text is very long or contains special characters ...)
    return this.http.post(this.apiUrl + '/api/numberPunctuations'  , body, {headers : headers});
  }

}
