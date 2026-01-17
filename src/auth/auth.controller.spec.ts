import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

describe('AuthController', () => {
  let controller: AuthController;

  const mockAuthService = {
    register: jest.fn(),
    login: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('register', () => {
    it('should register a new user', () => {
      const registerDto: RegisterDto = {
        email: 'test@example.com',
        password: 'password123',
        username: 'testuser',
      };
      const result = {
        message: 'User registered successfully',
        data: registerDto,
      };
      mockAuthService.register.mockReturnValue(result);

      expect(controller.register(registerDto)).toEqual(result);
      expect(mockAuthService.register).toHaveBeenCalledWith(registerDto);
    });
  });

  describe('login', () => {
    it('should login a user', () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'password123',
      };
      const result = {
        message: 'User logged in successfully',
        data: loginDto,
      };
      mockAuthService.login.mockReturnValue(result);

      expect(controller.login(loginDto)).toEqual(result);
      expect(mockAuthService.login).toHaveBeenCalledWith(loginDto);
    });
  });
});
