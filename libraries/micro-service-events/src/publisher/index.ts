//@ts-ignore
import { Stan } from "node-nats-streaming";
import { Event, EventDataMap } from "@events/index";
import { Subject } from "..";

export abstract class Publisher<T extends Subject> {
  abstract subject: T;
  private client: Stan;

  constructor(client: Stan) {
    this.client = client;
  }

  publish(data: EventDataMap[T]): Promise<void> {
    return new Promise((resolve, reject) => {
      this.client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) return reject(err);
        else resolve();
      });
    });
  }
}
