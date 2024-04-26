export interface User {
    email: String
    first_name: String
    last_name: String
    password: String
    phone_number: String
    user_type: userType, 
    _id: string
}

export enum userType {
    SENDIC= 'SENDIC',
    USER= 'USER'
}