import { ProblemStatusEnum } from "../../shared/problems/enums";

export interface DiagnosisCode {
  problemCode: string;
  description: string;
  status: string | null;
  id: [string, number] | null;
}
