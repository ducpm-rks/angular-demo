import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('AuthHeaderInterceptor is running');

    // Clone the request to add the new header.
    const modifiedReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        'Bearer YOUR_STATIC_JWT_TOKEN_HERE'
      ),
    });

    // Pass the cloned request instead of the original request to the next handler.
    return next.handle(modifiedReq);
  }
}
