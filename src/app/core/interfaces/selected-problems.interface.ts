import { ActivePatientProblem } from "./active-patient-problem.interface";
import { NewProblem } from "./new-problem.interface";

export interface SelectedProblems {
  ActiveProblems: ActivePatientProblem[],
  NewProblem: NewProblem | null
}
