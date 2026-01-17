import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return a message about returning all users', () => {
      const result = service.findAll();
      expect(result).toEqual({ message: 'This action returns all users' });
    });
  });

  describe('findOne', () => {
    it('should return a message about returning a specific user', () => {
      const id = 1;
      const result = service.findOne(id);
      expect(result).toEqual({
        message: `This action returns a #${id} user`,
      });
    });

    it('should return correct message for different user id', () => {
      const id = 5;
      const result = service.findOne(id);
      expect(result).toEqual({
        message: `This action returns a #${id} user`,
      });
    });
  });

  describe('create', () => {
    it('should return a message with created user data', () => {
      const createUserDto: CreateUserDto = {
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
      };
      const result = service.create(createUserDto);
      expect(result).toEqual({
        message: 'This action adds a new user',
        data: createUserDto,
      });
    });

    it('should handle user creation without password', () => {
      const createUserDto: CreateUserDto = {
        email: 'test@example.com',
        username: 'testuser',
      };
      const result = service.create(createUserDto);
      expect(result).toEqual({
        message: 'This action adds a new user',
        data: createUserDto,
      });
    });
  });

  describe('update', () => {
    it('should return a message with updated user data', () => {
      const id = 1;
      const updateUserDto: UpdateUserDto = {
        email: 'updated@example.com',
      };
      const result = service.update(id, updateUserDto);
      expect(result).toEqual({
        message: `This action updates a #${id} user`,
        data: updateUserDto,
      });
    });

    it('should handle partial updates', () => {
      const id = 2;
      const updateUserDto: UpdateUserDto = {
        username: 'newusername',
      };
      const result = service.update(id, updateUserDto);
      expect(result).toEqual({
        message: `This action updates a #${id} user`,
        data: updateUserDto,
      });
    });
  });

  describe('remove', () => {
    it('should return a message about removing a user', () => {
      const id = 1;
      const result = service.remove(id);
      expect(result).toEqual({
        message: `This action removes a #${id} user`,
      });
    });

    it('should return correct message for different user id', () => {
      const id = 10;
      const result = service.remove(id);
      expect(result).toEqual({
        message: `This action removes a #${id} user`,
      });
    });
  });
});
