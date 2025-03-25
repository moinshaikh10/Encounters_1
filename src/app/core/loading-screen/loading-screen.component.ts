import { Component, OnDestroy, OnInit } from '@angular/core';
import {LoaderIndicatorService} from "../../services/loader-indicator.service";
import { Subscription } from "rxjs";
import { NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'loading-screen',
  imports: [
    NgIf,
    NgOptimizedImage,
  ],
  templateUrl: './loading-screen.component.html',
  styleUrl: './loading-screen.component.scss',
})
export class LoadingScreenComponent implements OnInit, OnDestroy {
  constructor(private loadingService: LoaderIndicatorService) {}

  subscriptions: Subscription[] = [];

  isLoadingScreenVisible: boolean = false;

  ngOnInit(): void {
    this.loadingService.$loadingIndicatorVisible.subscribe((v:any) => {
      this.isLoadingScreenVisible = v;
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }


}
