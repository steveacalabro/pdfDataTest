import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ReadJsonService {

  constructor(private http: Http) { }

  getJson(): Observable<any> {
    return this.http.get('assets/output.json')
      .map((res: any) => res.json())
      .catch((error: any) => Observable.throw(error.json().message || 'Server error'));
  }
}
