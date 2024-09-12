import {ResourceType} from "../enums/resource-type";

export class Resource {
  id: number;
  name: string;
  quantity: number;
  type: ResourceType;
  provider: string;
  taskId: number;

  constructor(
    id: number,
    name: string,
    quantity: number,
    type: ResourceType,
    provider: string,
    taskId: number
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.type = type;
    this.provider = provider;
    this.taskId = taskId;
  }
}
