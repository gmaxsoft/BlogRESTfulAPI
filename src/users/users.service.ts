import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findAll() {
    return { message: 'This action returns all users' };
  }

  findOne(id: number) {
    return { message: `This action returns a #${id} user` };
  }

  create(createUserDto: any) {
    return { message: 'This action adds a new user', data: createUserDto };
  }

  update(id: number, updateUserDto: any) {
    return { message: `This action updates a #${id} user`, data: updateUserDto };
  }

  remove(id: number) {
    return { message: `This action removes a #${id} user` };
  }
}
