import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  register(registerDto: RegisterDto) {
    return { message: 'User registered successfully', data: registerDto };
  }

  login(loginDto: LoginDto) {
    return { message: 'User logged in successfully', data: loginDto };
  }
}
