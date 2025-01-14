import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AccountService } from '../account.service';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { IsString } from 'class-validator';

export interface AuthDto {
  token: string;
  expiresIn: number;
}

export class LoginModel {
  @IsString()
  email: string;
  @IsString()
  password: string;
}

@Injectable()
export class AuthService {
  private jwtExpirationTimeInSeconds: number;

  constructor(
    private readonly accountService: AccountService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpirationTimeInSeconds = +this.configService.get<number>(
      'JWT_EXPIRATION_TIME',
    );
  }

  async signIn(model: LoginModel): Promise<AuthDto> {
    const foundAccount = await this.accountService.findByEmail(model);

    if (!foundAccount || !compareSync(model.password, foundAccount.password)) {
      throw new UnauthorizedException();
    }

    const payload = { sub: foundAccount.id, username: foundAccount.name };

    const token = this.jwtService.sign(payload);

    return { token, expiresIn: this.jwtExpirationTimeInSeconds };
  }
}
