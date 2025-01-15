import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/create-users.dto';
import { UUID } from 'crypto';
import { UpdateUserDto } from './dto/update-users.dto';
export declare class UsersService {
    users: User[];
    findAll(): User[];
    create(createUserDto: CreateUserDto): User;
    update(id: UUID, updateUserDto: UpdateUserDto): User;
    remove(id: UUID): string;
}
