import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountController } from 'src/Controllers/AccountAggregate/account.controller';
import { AccountEntity } from 'src/Entities/AccountAggregate/account.entity';
import { AccountService } from 'src/Services/AccountAggregate/account.service';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
