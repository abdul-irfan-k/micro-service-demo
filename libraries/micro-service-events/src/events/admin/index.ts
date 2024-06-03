export interface adminCreatedEvent {
    _id: string;
    name: string;
    email: string;
    password: string;
    [key: string]: any;
}

export interface adminUpdatedEvent {
    _id: string;
    [key: string]: any;
}
