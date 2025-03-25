import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppDataService } from '../services/app-data.service';
import { Problem } from '../core/interfaces/problem.interface';
import { ProblemsRequest } from '../core/interfaces/problems-request.interface';
import { ProblemsResponse } from '../core/interfaces/problems-response.interface';
import { ActivePatientProblem } from '../core/interfaces/active-patient-problem.interface';

@Injectable({
  providedIn: 'root',
})
export class ProblemsService {

  constructor(private http: HttpClient, private appDataService: AppDataService) { }

  private httpHeaders(): HttpHeaders {
    return new HttpHeaders({
      CcsUserId: this.appDataService.getCurrentUser().UserId.toString(),
      CcsUserIdHash: this.appDataService.getCurrentUser().UserIdHash.toString()
    })
  }

  getProblems(problemRequest: ProblemsRequest): Observable<Problem[]> {
    const url = `${this.appDataService.getUrls().patientProfileApiUrl}problem/getProblems/`;
    return this.http
      .post<ProblemsResponse>(url, problemRequest, { headers: this.httpHeaders(), responseType: "json" })
      .pipe(
        map((problemsResponse) => {
          return problemsResponse.payload.map((problem: Problem) => ({
            ...problem
          }));
        }),
      )
  }

  getActiveProblems(patientId: number): Observable<ActivePatientProblem[]> {
    const url = `${this.appDataService.getUrls().patientProfileApiUrl}problem/getActiveProblems/`;
    return this.http
      .post<ProblemsResponse>(url, patientId)
      .pipe(
        map((problemsResponse) => {
          return problemsResponse.payload.map((problem: ActivePatientProblem) => ({
            ...problem
          }));
        })
      );
  }

  canConfirmProblems(): Observable<boolean> {
    const url = `${this.appDataService.getUrls().ermaWebsiteApi}users/canConfirmProblems/${this.appDataService.getCurrentUser().WindowsLogin}`;
    return this.http
      .post<boolean>(url, null)
      .pipe(
        map((response) => {
          return response;
        })
      );
  }
}
