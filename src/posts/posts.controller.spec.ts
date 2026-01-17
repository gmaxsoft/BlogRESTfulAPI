import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

describe('PostsController', () => {
  let controller: PostsController;

  const mockPostsService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [
        {
          provide: PostsService,
          useValue: mockPostsService,
        },
      ],
    }).compile();

    controller = module.get<PostsController>(PostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of posts', () => {
      const result = { message: 'This action returns all posts' };
      mockPostsService.findAll.mockReturnValue(result);

      expect(controller.findAll()).toEqual(result);
      expect(mockPostsService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single post', () => {
      const result = { message: 'This action returns a #1 post' };
      mockPostsService.findOne.mockReturnValue(result);

      expect(controller.findOne('1')).toEqual(result);
      expect(mockPostsService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('create', () => {
    it('should create a new post', () => {
      const createPostDto: CreatePostDto = {
        title: 'Test Post',
        content: 'This is a test post content',
        authorId: 1,
      };
      const result = {
        message: 'This action adds a new post',
        data: createPostDto,
      };
      mockPostsService.create.mockReturnValue(result);

      expect(controller.create(createPostDto)).toEqual(result);
      expect(mockPostsService.create).toHaveBeenCalledWith(createPostDto);
    });

    it('should create a post without authorId', () => {
      const createPostDto: CreatePostDto = {
        title: 'Test Post',
        content: 'This is a test post content',
      };
      const result = {
        message: 'This action adds a new post',
        data: createPostDto,
      };
      mockPostsService.create.mockReturnValue(result);

      expect(controller.create(createPostDto)).toEqual(result);
      expect(mockPostsService.create).toHaveBeenCalledWith(createPostDto);
    });
  });

  describe('update', () => {
    it('should update a post', () => {
      const updatePostDto: UpdatePostDto = {
        title: 'Updated Post Title',
      };
      const result = {
        message: 'This action updates a #1 post',
        data: updatePostDto,
      };
      mockPostsService.update.mockReturnValue(result);

      expect(controller.update('1', updatePostDto)).toEqual(result);
      expect(mockPostsService.update).toHaveBeenCalledWith(1, updatePostDto);
    });
  });

  describe('remove', () => {
    it('should remove a post', () => {
      const result = { message: 'This action removes a #1 post' };
      mockPostsService.remove.mockReturnValue(result);

      expect(controller.remove('1')).toEqual(result);
      expect(mockPostsService.remove).toHaveBeenCalledWith(1);
    });
  });
});
