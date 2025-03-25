import { BloodPressure } from "./blood-pressure-submit.interface";

export interface EncounterVitalsSigns {
  bloodPressure: BloodPressure | null;
  respirationRate: number | null;
  pulse: number | null;
  pulseOx: number | null;
  temperature: number | null;
  height: number | null;
  weight: number | null;
  bloodSugar: number | null;
  peakFlowOne: number | null;
  peakFlowTwo: number | null;
  peakFlowThree: number | null;
}
