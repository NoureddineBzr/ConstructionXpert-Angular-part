import {Status} from "../enums/status";

export interface Project {
  id?: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  budget: number;
  status: Status;
}
