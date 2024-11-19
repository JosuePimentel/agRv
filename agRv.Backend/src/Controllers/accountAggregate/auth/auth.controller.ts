import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthDto } from "src/DTO's/AccountAggregate/auth/auth.dto";
import { LoginModel } from 'src/Models/AccountAggregate/auth/Login.model';
import { AuthService } from 'src/Services/AccountAggregate/auth/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async signIn(@Body() model: LoginModel): Promise<AuthDto> {
    return await this.authService.signIn(model);
  }
}