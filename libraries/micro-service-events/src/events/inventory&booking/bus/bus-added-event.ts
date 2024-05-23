import { Subject } from "../../../subjects";

export interface busAddedEvent {
  subject: Subject.busAdded;
  data: Object
}
