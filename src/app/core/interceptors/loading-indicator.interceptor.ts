import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, finalize, Observable } from 'rxjs';
import { LoaderIndicatorService } from "../../services/loader-indicator.service";
import { map } from "rxjs/operators";

@Injectable()
export class LoadingIndicatorInterceptor implements HttpInterceptor {
  private loadingService: LoaderIndicatorService;

  constructor(loadingService: LoaderIndicatorService) {
    this.loadingService = loadingService;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loadingService.incrementLoading();
    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        return event;
      }),
      catchError((err) => {
        return new Observable<HttpEvent<any>>();
      }),
      finalize(() => this.loadingService.decrementLoading()),
    );
  }
}
