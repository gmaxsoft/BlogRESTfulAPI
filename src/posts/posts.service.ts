import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
  findAll() {
    return { message: 'This action returns all posts' };
  }

  findOne(id: number) {
    return { message: `This action returns a #${id} post` };
  }

  create(createPostDto: any) {
    return { message: 'This action adds a new post', data: createPostDto };
  }

  update(id: number, updatePostDto: any) {
    return { message: `This action updates a #${id} post`, data: updatePostDto };
  }

  remove(id: number) {
    return { message: `This action removes a #${id} post` };
  }
}
