import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentsService {
  findAll() {
    return { message: 'This action returns all comments' };
  }

  findOne(id: number) {
    return { message: `This action returns a #${id} comment` };
  }

  create(createCommentDto: any) {
    return { message: 'This action adds a new comment', data: createCommentDto };
  }

  update(id: number, updateCommentDto: any) {
    return { message: `This action updates a #${id} comment`, data: updateCommentDto };
  }

  remove(id: number) {
    return { message: `This action removes a #${id} comment` };
  }
}
