import { Message } from 'src/messages/entities/messages.entity';
export declare class User {
    id: number;
    name: string;
    mail: string;
    passwordHash: string;
    createdAt: Date;
    updateAt: Date;
    sentMessages: Message[];
    receivedMessages: Message[];
}
