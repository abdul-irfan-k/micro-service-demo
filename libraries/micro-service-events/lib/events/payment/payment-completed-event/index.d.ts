import { Subject } from "../../../subjects";
export interface paymentComletedEvent {
    subject: Subject.paymentComleted;
    data: {
        productId: string;
        totalPrice: number;
    };
}
