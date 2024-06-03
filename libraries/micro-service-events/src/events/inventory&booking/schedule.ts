import { Subject } from "@subjects/subjects";

export interface scheduleAddedEvent {
  [key: string]: any;
}

export interface scheduleUpdatedEvent {
  _id: string;
  [key: string]: any;
}

export interface scheduleRemovedEvent {
  _id: string;
  [key: string]: any;
}
