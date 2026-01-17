import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  findAll() {
    return { message: 'This action returns all comments' };
  }

  findOne(id: number) {
    return { message: `This action returns a #${id} comment` };
  }

  create(createCommentDto: CreateCommentDto) {
    return {
      message: 'This action adds a new comment',
      data: createCommentDto,
    };
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return {
      message: `This action updates a #${id} comment`,
      data: updateCommentDto,
    };
  }

  remove(id: number) {
    return { message: `This action removes a #${id} comment` };
  }
}
