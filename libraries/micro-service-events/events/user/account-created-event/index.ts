import { Subject } from "../../../subjects"

export interface accountCreatedEvent {
    subject:Subject.accountCreated,
    data:{
        id:string
        name:string
        email:string
    }
}