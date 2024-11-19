import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from 'src/Controllers/AccountAggregate/auth/auth.controller';
import { AuthService } from 'src/Services/AccountAggregate/auth/auth.service';
import { AccountModule } from '../account.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: +configService.get<number>('JWT_EXPIRATION_TIME'),
        },
      }),
    }),
    AccountModule,
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModules {}
