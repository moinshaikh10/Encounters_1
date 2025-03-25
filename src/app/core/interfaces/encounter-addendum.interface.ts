import { DateTime } from "luxon";

export interface EncounterAddendum {
    submittedDate: DateTime;
    submittedUser: string;
    note: string;
    timeZone: string;

    [key: string]: any;
}
