import { DateTime } from "luxon";
import { SoapNote } from './soap-note.interface';
import { DiagnosisCode } from './diagnosis-code.interface';
import { EncounterVitalsSigns } from "./encounter-vitals-signs.interface";

export interface Encounter {
    id: number;
    patientId: number;
    siteId: number;
    siteDeptId: number;
    startTime: DateTime;
    endTime: DateTime;
    duration: string;
    placeOfService: number;
    provider: string;
    type: number;
    soapNotes: SoapNote;
    diagnosisCodes: DiagnosisCode[];
    vitals: EncounterVitalsSigns[];
}
