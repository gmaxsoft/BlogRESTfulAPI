import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  register(registerDto: any) {
    return { message: 'User registered successfully', data: registerDto };
  }

  login(loginDto: any) {
    return { message: 'User logged in successfully', data: loginDto };
  }
}
