import { Test, TestingModule } from '@nestjs/testing';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

describe('CommentsService', () => {
  let service: CommentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommentsService],
    }).compile();

    service = module.get<CommentsService>(CommentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a message about returning all comments', () => {
      const result = service.findAll();
      expect(result).toEqual({ message: 'This action returns all comments' });
    });
  });

  describe('findOne', () => {
    it('should return a message about returning a comment by id', () => {
      const id = 1;
      const result = service.findOne(id);
      expect(result).toEqual({
        message: `This action returns a #${id} comment`,
      });
    });
  });

  describe('create', () => {
    it('should return a message about adding a new comment with the DTO data', () => {
      const createCommentDto: CreateCommentDto = {
        content: 'Test comment',
        postId: 1,
        authorId: 1,
      };
      const result = service.create(createCommentDto);
      expect(result).toEqual({
        message: 'This action adds a new comment',
        data: createCommentDto,
      });
    });
  });

  describe('update', () => {
    it('should return a message about updating a comment with the DTO data', () => {
      const id = 1;
      const updateCommentDto: UpdateCommentDto = {
        content: 'Updated comment',
      };
      const result = service.update(id, updateCommentDto);
      expect(result).toEqual({
        message: `This action updates a #${id} comment`,
        data: updateCommentDto,
      });
    });
  });

  describe('remove', () => {
    it('should return a message about removing a comment by id', () => {
      const id = 1;
      const result = service.remove(id);
      expect(result).toEqual({
        message: `This action removes a #${id} comment`,
      });
    });
  });
});
