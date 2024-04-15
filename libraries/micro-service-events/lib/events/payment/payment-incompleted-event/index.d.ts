import { Subject } from "../../../subjects";
export interface paymentInComletedEvent {
    subject: Subject.paymentIncomleted;
    data: {
        productId: string;
        totalPrice: number;
    };
}
