import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  findAll() {
    return { message: 'This action returns all users' };
  }

  findOne(id: number) {
    return { message: `This action returns a #${id} user` };
  }

  create(createUserDto: CreateUserDto) {
    return { message: 'This action adds a new user', data: createUserDto };
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return {
      message: `This action updates a #${id} user`,
      data: updateUserDto,
    };
  }

  remove(id: number) {
    return { message: `This action removes a #${id} user` };
  }
}
