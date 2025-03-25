import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoaderIndicatorService {
  private loadingCount: number = 0;

  private loadingIndicatorVisible = new Subject<boolean>();
  $loadingIndicatorVisible = this.loadingIndicatorVisible.asObservable();

  public incrementLoading() {
    if (this.loadingCount === 0) {
      this.loadingIndicatorVisible.next(true);
    }
    this.loadingCount++;
  }

  public decrementLoading() {
    this.loadingCount--;
    if (this.loadingCount === 0) {
      this.loadingIndicatorVisible.next(false);
    }
  }
}