import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { environment } from '../../../environments/environment';
import { Patient } from '../interfaces/patient.interface';
import { SimpleEncounter } from '../../encounters/interfaces/simple-encounter.interface';

@Injectable({ providedIn: 'root' })
export class AppDataService {
  public productionEnvironment: boolean = environment.production;

  private patientSubject = new Subject<Patient>();
  patient$ = this.patientSubject.asObservable();
  setPatient(newPatient: Patient) {
    this.patientSubject.next(newPatient);
  }

  private activeEncounterSubject = new Subject<SimpleEncounter>();
  activeEncounter$ = this.activeEncounterSubject.asObservable();
  setActiveEncounter(newActiveEncounter: SimpleEncounter) {
    this.activeEncounterSubject.next(newActiveEncounter);
  }

  private resetEncounterGridSubject = new Subject<null>();
  $resetEncounterGrid = this.resetEncounterGridSubject.asObservable();
  resetEncounterGrid() {
    this.resetEncounterGridSubject.next(null);
  }

  private getDraftSubject = new Subject<null>();
  $getDraft = this.getDraftSubject.asObservable();
  getDraft() {
    this.getDraftSubject.next(null);
  }

  private hideEncounterFormSubject = new BehaviorSubject<boolean>(false);
  private hideEncounterAddendumsForm = new BehaviorSubject<boolean>(true);
  private setReadOnlyHistoricalEncounter = new BehaviorSubject<boolean>(false);
  hideEncounterForm$ = this.hideEncounterFormSubject.asObservable();
  hideEncounterAddendumsForm$ = this.hideEncounterAddendumsForm.asObservable();
  setReadOnlyHistoricalEncounter$ = this.setReadOnlyHistoricalEncounter.asObservable() || null;

  showEncounterForm() {
    this.setReadOnlyHistoricalEncounter.next(false);
    this.hideEncounterFormSubject.next(false);
    this.hideEncounterAddendumsForm.next(true);
    this.resetEncounterGrid();
  }

  showEncounterAddendumsForm() {
    this.setReadOnlyHistoricalEncounter.next(true);
    this.hideEncounterAddendumsForm.next(false);
  }


  getUrls(): any { return environment.urls }

  getCurrentUser(): User { return environment.appData.currentUser }
  setCurrentUser(newUser: User) { environment.appData.currentUser = newUser }

  getApiKey(): string { return environment.appData.apiKey }
  setApiKey(newApiKey: string) { environment.appData.apiKey = newApiKey }

  getTimeZones() {
    let timeZones: {[key: string]: string } = {}

    timeZones['GMT'] = 'UTC';
    timeZones['EST'] = 'America/New_York';
    timeZones['CST'] = 'America/Chicago';
    timeZones['MST'] = 'America/Denver';
    timeZones['PST'] = 'America/Los_Angeles';
    timeZones['InST'] = 'Asia/Kolkata';

    return timeZones;
  }
}
