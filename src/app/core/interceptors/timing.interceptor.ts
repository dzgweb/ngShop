import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpEventType } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  startRequest;
  finishRequest;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.includes('products')) {
      this.startRequest = new Date();
      console.time('time products request:');
    }

    return next.handle(req)
      .pipe(
        filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
        map((event: HttpResponse<any>) => {
          if (event.url.includes('products')) {
            this.finishRequest = new Date();
            console.log(`timeSpent: ${this.finishRequest - this.startRequest}`);
            console.timeEnd('time products request:');
          }
          return event;
        })
      );
  }
}
