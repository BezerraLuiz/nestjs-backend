import { UUID } from 'crypto';
export declare class User {
    id: UUID;
    name: string;
    mail: string;
    password: string;
    createdAt: Date;
}
