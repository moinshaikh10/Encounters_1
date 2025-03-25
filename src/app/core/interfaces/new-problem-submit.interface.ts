import { ProblemStatusEnum } from "../../shared/problems/enums";

export interface NewProblemSubmit {
  notes: string[];
  siteProblemId: number;
  status: ProblemStatusEnum;
}
