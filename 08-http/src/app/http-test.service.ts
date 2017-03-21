import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';

import 'rxjs/Rx';
import {Observable} from "rxjs";

@Injectable()
export class HttpTestService {

  constructor(private http: Http) {

  }

  getData() {
    return this.http.get('https://angular2-course-36d1a.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  sendData(data: any) {
    const body = JSON.stringify(data);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('https://angular2-course-36d1a.firebaseio.com/data.json', body)
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getMyOwnData() {
    return this.http.get('https://angular2-course-36d1a.firebaseio.com/data.json')
      .map((response: Response) => {
        const result = [];
        const data = response.json();
        for (const key in data) {
          result.push(data[key]);
        }
        return result;
      })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.log(error);
    return Observable.throw(error);
  }
}
