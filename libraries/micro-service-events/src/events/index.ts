import {
  paymentComletedEvent,
  paymentInComletedEvent,
  paymentInProcessingEvent,
} from "./payment";
import { userCreatedEvent, userRemovedEvent, userUpdatedEvent } from "./user";
import { adminCreatedEvent, adminUpdatedEvent } from "./admin";
import {
  busAddedEvent,
  busRemovedEvent,
  busUpdatedEvent,
  routeAddedEvent,
  routeRemovedEvent,
  routeUpdatedEvent,
  scheduleAddedEvent,
  scheduleRemovedEvent,
  scheduleUpdatedEvent,
} from "./inventory&booking";

import { Subject } from "../subjects/subjects";

export type EventDataMap = {
  [Subject.paymentComleted]: paymentComletedEvent;
  [Subject.paymentIncomleted]: paymentInComletedEvent;
  [Subject.paymentProcessing]: paymentInProcessingEvent;

  [Subject.userCreated]: userCreatedEvent;
  [Subject.userUpdated]: userUpdatedEvent;
  [Subject.userRemoved]: userRemovedEvent;

  [Subject.adminCreated]: adminCreatedEvent;
  [Subject.adminUpdated]: adminUpdatedEvent;

  [Subject.busAdded]: busAddedEvent;
  [Subject.busUpdated]: busUpdatedEvent;
  [Subject.busRemoved]: busRemovedEvent;

  [Subject.routeAdded]: routeAddedEvent;
  [Subject.routeUpdated]: routeUpdatedEvent;
  [Subject.routeRemoved]: routeRemovedEvent;

  [Subject.scheduleAdded]: scheduleAddedEvent;
  [Subject.scheduleUpdated]: scheduleUpdatedEvent;
  [Subject.scheduleRemoved]: scheduleRemovedEvent;
};

export type Event = {
  [K in Subject]: { subject: K; data: EventDataMap[K] };
}[Subject];
