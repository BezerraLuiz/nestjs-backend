import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async create(body: CreateUserDto): Promise<User> {
    try {
      // Verify mail in use
      const allUsers = await this.findAll();

      const existUser: boolean = allUsers.some(
        (user) => user.mail == body.mail,
      );

      if (existUser) {
        throw new HttpException(
          'Mail has already registered',
          HttpStatus.CONFLICT,
        );
      }

      // If mail dont in use, create new user

      const userData = {
        ...body,
        passwordHash: body.password,
      };

      const user = this.userRepository.create(userData);

      await this.userRepository.save(user);

      return user;
    } catch (error) {
      console.log('Error: ', error);

      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = this.userRepository.findOneBy({ id });

    if (!user) throw new HttpException('User dont exist', 404);

    return user;
  }

  async update(id: number, body: UpdateUserDto): Promise<User> {
    const userData = {
      ...body,
      passwordHash: body.password,
    };

    const user = await this.userRepository.preload({
      id,
      ...userData,
    });

    if (!user) throw new HttpException('User dont exist', 404);

    this.userRepository.save(user);

    return user;
  }

  async remove(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) throw new HttpException('User dont exist', 404);

    return this.userRepository.remove(user);
  }
}
