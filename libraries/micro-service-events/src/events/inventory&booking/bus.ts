import { Subject } from "../../subjects/subjects";

export interface busAddedEvent {
  [key: string]: any;
}

export interface busUpdatedEvent {
  _id: string;
  [key: string]: any;
}


export interface busRemovedEvent {
  _id: string;
  [key: string]: any;
}