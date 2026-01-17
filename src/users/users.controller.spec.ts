import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', () => {
      const result = { message: 'This action returns all users' };
      mockUsersService.findAll.mockReturnValue(result);

      expect(controller.findAll()).toEqual(result);
      expect(mockUsersService.findAll).toHaveBeenCalled();
    });
  });

  describe('findOne', () => {
    it('should return a single user', () => {
      const result = { message: 'This action returns a #1 user' };
      mockUsersService.findOne.mockReturnValue(result);

      expect(controller.findOne('1')).toEqual(result);
      expect(mockUsersService.findOne).toHaveBeenCalledWith(1);
    });
  });

  describe('create', () => {
    it('should create a new user', () => {
      const createUserDto: CreateUserDto = {
        email: 'test@example.com',
        username: 'testuser',
        password: 'password123',
      };
      const result = {
        message: 'This action adds a new user',
        data: createUserDto,
      };
      mockUsersService.create.mockReturnValue(result);

      expect(controller.create(createUserDto)).toEqual(result);
      expect(mockUsersService.create).toHaveBeenCalledWith(createUserDto);
    });
  });

  describe('update', () => {
    it('should update a user', () => {
      const updateUserDto: UpdateUserDto = {
        email: 'updated@example.com',
      };
      const result = {
        message: 'This action updates a #1 user',
        data: updateUserDto,
      };
      mockUsersService.update.mockReturnValue(result);

      expect(controller.update('1', updateUserDto)).toEqual(result);
      expect(mockUsersService.update).toHaveBeenCalledWith(1, updateUserDto);
    });
  });

  describe('remove', () => {
    it('should remove a user', () => {
      const result = { message: 'This action removes a #1 user' };
      mockUsersService.remove.mockReturnValue(result);

      expect(controller.remove('1')).toEqual(result);
      expect(mockUsersService.remove).toHaveBeenCalledWith(1);
    });
  });
});
