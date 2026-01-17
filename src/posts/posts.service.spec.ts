import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

describe('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsService],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a message about returning all posts', () => {
      const result = service.findAll();
      expect(result).toEqual({ message: 'This action returns all posts' });
    });
  });

  describe('findOne', () => {
    it('should return a message about returning a specific post', () => {
      const id = 1;
      const result = service.findOne(id);
      expect(result).toEqual({
        message: `This action returns a #${id} post`,
      });
    });

    it('should return correct message for different post id', () => {
      const id = 5;
      const result = service.findOne(id);
      expect(result).toEqual({
        message: `This action returns a #${id} post`,
      });
    });
  });

  describe('create', () => {
    it('should return a message with created post data', () => {
      const createPostDto: CreatePostDto = {
        title: 'Test Post',
        content: 'This is a test post content',
        authorId: 1,
      };
      const result = service.create(createPostDto);
      expect(result).toEqual({
        message: 'This action adds a new post',
        data: createPostDto,
      });
    });

    it('should handle post creation without authorId', () => {
      const createPostDto: CreatePostDto = {
        title: 'Test Post',
        content: 'This is a test post content',
      };
      const result = service.create(createPostDto);
      expect(result).toEqual({
        message: 'This action adds a new post',
        data: createPostDto,
      });
    });
  });

  describe('update', () => {
    it('should return a message with updated post data', () => {
      const id = 1;
      const updatePostDto: UpdatePostDto = {
        title: 'Updated Post Title',
      };
      const result = service.update(id, updatePostDto);
      expect(result).toEqual({
        message: `This action updates a #${id} post`,
        data: updatePostDto,
      });
    });

    it('should handle partial updates', () => {
      const id = 2;
      const updatePostDto: UpdatePostDto = {
        content: 'Updated content',
      };
      const result = service.update(id, updatePostDto);
      expect(result).toEqual({
        message: `This action updates a #${id} post`,
        data: updatePostDto,
      });
    });

    it('should handle updating both title and content', () => {
      const id = 3;
      const updatePostDto: UpdatePostDto = {
        title: 'New Title',
        content: 'New Content',
      };
      const result = service.update(id, updatePostDto);
      expect(result).toEqual({
        message: `This action updates a #${id} post`,
        data: updatePostDto,
      });
    });
  });

  describe('remove', () => {
    it('should return a message about removing a post', () => {
      const id = 1;
      const result = service.remove(id);
      expect(result).toEqual({
        message: `This action removes a #${id} post`,
      });
    });

    it('should return correct message for different post id', () => {
      const id = 10;
      const result = service.remove(id);
      expect(result).toEqual({
        message: `This action removes a #${id} post`,
      });
    });
  });
});
