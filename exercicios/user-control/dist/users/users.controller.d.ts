import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { UUID } from 'crypto';
import { UpdateUserDto } from './dto/update-users.dto';
export declare class UsersController {
    private readonly usersServices;
    constructor(usersServices: UsersService);
    findAll(): import("./entities/users.entity").User[];
    create(createUserDto: CreateUserDto): import("./entities/users.entity").User;
    update(id: UUID, updateUserDto: UpdateUserDto): void;
    remove(id: UUID): void;
}
