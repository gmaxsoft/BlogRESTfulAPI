import { Test, TestingModule } from '@nestjs/testing';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

describe('CommentsController', () => {
  let controller: CommentsController;

  const mockCommentsService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentsController],
      providers: [
        {
          provide: CommentsService,
          useValue: mockCommentsService,
        },
      ],
    }).compile();

    controller = module.get<CommentsController>(CommentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of comments', () => {
      const result = { message: 'This action returns all comments' };
      mockCommentsService.findAll.mockReturnValue(result);

      expect(controller.findAll()).toEqual(result);
      expect(mockCommentsService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single comment', () => {
      const result = { message: 'This action returns a #1 comment' };
      mockCommentsService.findOne.mockReturnValue(result);

      expect(controller.findOne('1')).toEqual(result);
      expect(mockCommentsService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('create', () => {
    it('should create a new comment', () => {
      const createCommentDto: CreateCommentDto = {
        content: 'Test comment',
        postId: 1,
        authorId: 1,
      };
      const result = {
        message: 'This action adds a new comment',
        data: createCommentDto,
      };
      mockCommentsService.create.mockReturnValue(result);

      expect(controller.create(createCommentDto)).toEqual(result);
      expect(mockCommentsService.create).toHaveBeenCalledWith(createCommentDto);
    });
  });

  describe('update', () => {
    it('should update a comment', () => {
      const updateCommentDto: UpdateCommentDto = {
        content: 'Updated comment',
      };
      const result = {
        message: 'This action updates a #1 comment',
        data: updateCommentDto,
      };
      mockCommentsService.update.mockReturnValue(result);

      expect(controller.update('1', updateCommentDto)).toEqual(result);
      expect(mockCommentsService.update).toHaveBeenCalledWith(
        1,
        updateCommentDto,
      );
    });
  });

  describe('remove', () => {
    it('should remove a comment', () => {
      const result = { message: 'This action removes a #1 comment' };
      mockCommentsService.remove.mockReturnValue(result);

      expect(controller.remove('1')).toEqual(result);
      expect(mockCommentsService.remove).toHaveBeenCalledWith(1);
    });
  });
});
