import { Problem } from "./problem.interface";
import { ProblemStatusEnum } from "../enums";

export interface NewProblem {
  problem: Problem,
  problemStatus: ProblemStatusEnum,
  note: string | null,
}
