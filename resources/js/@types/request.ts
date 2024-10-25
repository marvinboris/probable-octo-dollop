import { Applicant } from "./applicant";
import { Job } from "./job";

export type Request = {
  id: string;
  created_at: string;
  company: string;
  location: string;
  contract: string;
  _job?: Job;
  _applicant?: Applicant;
  status: number;
};
