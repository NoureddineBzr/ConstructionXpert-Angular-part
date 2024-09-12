import {Status} from "../enums/status";

export class Task {
  id: number;
  description: string;
  startDate: Date;
  endDate: Date;
  status: Status;
  projectId: number;

  constructor(
    id: number,
    description: string,
    startDate: Date,
    endDate: Date,
    status: Status,
    projectId: number
  ) {
    this.id = id;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.status = status;
    this.projectId = projectId;
  }
}
