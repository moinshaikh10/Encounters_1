import { DateTime } from 'luxon';
import { SoapNote } from './soap-note.interface';
import { EncounterVitalsSigns, NewProblemSubmit } from './';

export interface EncounterSubmit {
  patientId: number;
  siteId: number;
  siteDeptId: number;
  startTime: DateTime;
  endTime: DateTime;
  placeOfService: number;
  soapNotes: SoapNote;
  existingAssociatedProblemIds: number[];
  newProblems: NewProblemSubmit[];
  vitals: EncounterVitalsSigns[] | null;
  userId: number;
  type: number;
}
