import { Message, Stan } from "node-nats-streaming";
import { Subject } from "../subjects/index";
interface Event {
    subject: Subject;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    abstract subject: T["subject"];
    abstract queueGroupName: string;
    abstract onMessage(data: T["data"], message: Message): void;
    private client;
    protected ackWait: number;
    constructor(client: Stan);
    subscriptionOptions(): any;
    listen(): void;
    parseMessage(msg: Message): any;
}
export {};
