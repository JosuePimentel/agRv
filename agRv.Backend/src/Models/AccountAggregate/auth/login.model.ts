import { IsString } from 'class-validator';

export class LoginModel {
  @IsString()
  email: string;
  @IsString()
  password: string;
}
