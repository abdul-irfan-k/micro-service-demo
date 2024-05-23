import { Subject } from "../../../subjects";

export interface busUpdateEvent {
  subject: Subject.busUpdated;
  data: Object
}
