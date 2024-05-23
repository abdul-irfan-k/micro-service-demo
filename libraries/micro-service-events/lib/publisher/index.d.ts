import { Stan } from "node-nats-streaming";
import { Subject } from "../subjects/index";
interface Event {
    subject: Subject;
    data: any;
}
export declare abstract class Publisher<T extends Event> {
    abstract subject: T["subject"];
    private client;
    constructor(client: Stan);
    publish(data: T["data"]): Promise<void>;
}
export {};
