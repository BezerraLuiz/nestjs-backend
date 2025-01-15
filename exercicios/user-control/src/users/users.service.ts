import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from './entities/users.entity';
import { CreateUserDto } from './dto/create-users.dto';
import { randomUUID, UUID } from 'crypto';
import { UpdateUserDto } from './dto/update-users.dto';

@Injectable()
export class UsersService {
  users: User[] = [];

  findAll(): User[] {
    if (!this.users) {
      throw new HttpException(
        'Dont have users registred',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.users;
  }

  create(createUserDto: CreateUserDto): User {
    if (createUserDto.password != createUserDto.confirmPassword) {
      throw new HttpException('Password not equals', HttpStatus.NOT_FOUND);
    }

    const { confirmPassword, ...userDetails } = createUserDto;

    const user: User = {
      id: randomUUID(),
      ...userDetails,
      createdAt: new Date(),
    };

    this.users.push(user);

    return user;
  }

  update(id: UUID, updateUserDto: UpdateUserDto): User {
    const indexUser: number = this.users.findIndex((user) => user.id == id);

    if (indexUser < 0) throw new HttpException('User dont exist', 404);

    const user: User = this.users[indexUser];

    return (this.users[indexUser] = {
      ...user,
      ...updateUserDto,
    });
  }

  remove(id: UUID): string {
    const indexUser: number = this.users.findIndex((user) => user.id == id);

    if (indexUser < 0) throw new HttpException('User dont exist', 404);

    this.users.splice(indexUser, 1);

    return `Remove message with id ${id}`;
  }
}
