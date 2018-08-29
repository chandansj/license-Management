import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { URLSearchParams } from '@angular/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LicenseService {

  url = 'http://localhost:53520/api/license';
  constructor(private http: Http) { }

  postLicense(query: any) {
    const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

    return this.http.post(this.url, query, options)
     .pipe(
      map((e: Response) => e));
  }

  getLicense(LicenseKey: any) {
     const headers = new Headers({ 'Content-Type': 'application/json' });
     const options = new RequestOptions({ headers: headers });
    return this
      .http
      .get(this.url + '/' + LicenseKey, options)
       .pipe(
      map((e: Response) => e.json()));
  }
}
