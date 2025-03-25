import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppDataService } from '../../services/app-data.service';

@Injectable()
export class authenticationInterceptor implements HttpInterceptor {
  constructor(private appDataService: AppDataService){}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {

    const modifiedRequest = request.clone({
      setHeaders: { 'apiKey': this.appDataService.getApiKey() }
    });

    return next.handle(modifiedRequest);
  }
}
