import { Subject } from "@subjects/subjects";

export interface routeAddedEvent {
  _id: string;
  destination:string;
  [key: string]: any;
}

export interface routeUpdatedEvent {
  _id: string;
  [key: string]: any;
}

export interface routeRemovedEvent {
  _id: string;
  [key: string]: any;
}
