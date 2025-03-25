import { DateTime } from 'luxon';
import { SoapNote } from './soap-note.interface';
import { EncounterVitalsSigns, NewProblemSubmit } from './';
import { ActivePatientProblem, NewProblem } from "../../shared/problems/interfaces";
import { VitalSignsForm } from "../../shared/vital-signs/interfaces/vital-signs-form.interface";

export interface EncounterDraft {
  startTime: DateTime;
  endTime: DateTime;
  soapNotes: SoapNote;
  existingAssociatedProblems: ActivePatientProblem[];
  newProblems: NewProblem[];
  vitals: VitalSignsForm[];
  type: number;
}
