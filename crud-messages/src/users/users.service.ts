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

      const user: User = this.userRepository.create(userData);

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
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
