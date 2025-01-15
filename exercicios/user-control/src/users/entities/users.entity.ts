import { UUID } from 'crypto';

export class User {
  id: UUID;
  name: string;
  mail: string;
  password: string;
  createdAt: Date;
}
