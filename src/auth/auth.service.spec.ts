import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should return a message about successful registration with the DTO data', () => {
      const registerDto: RegisterDto = {
        email: 'test@example.com',
        password: 'password123',
        username: 'testuser',
      };
      const result = service.register(registerDto);
      expect(result).toEqual({
        message: 'User registered successfully',
        data: registerDto,
      });
    });
  });

  describe('login', () => {
    it('should return a message about successful login with the DTO data', () => {
      const loginDto: LoginDto = {
        email: 'test@example.com',
        password: 'password123',
      };
      const result = service.login(loginDto);
      expect(result).toEqual({
        message: 'User logged in successfully',
        data: loginDto,
      });
    });
  });
});
