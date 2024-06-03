export interface userCreatedEvent {
    _id: string;
    name: string;
    email: string;
    password: string;
    [key: string]: any;
}
export interface userRemovedEvent {
    _id: string;
    [key: string]: any;
}
export interface userUpdatedEvent {
    _id: string;
    name: string;
    email: string;
    password: string;
    [key: string]: any;
}