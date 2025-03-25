import { HTTP_INTERCEPTORS } from "@angular/common/http";

import { LoadingIndicatorInterceptor } from "./loading-indicator.interceptor";
import { authenticationInterceptor } from "./authentication.interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoadingIndicatorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: authenticationInterceptor, multi: true },
]
