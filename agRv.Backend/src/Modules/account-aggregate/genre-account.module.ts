import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreAccountController } from 'src/Controllers/accountAggregate/genre-account.controller';
import { GenreAccountEntity } from 'src/Entities/AccountAggregate/genre-account.entity';
import { GenreAccountService } from 'src/Services/accountAggregate/genre-account.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenreAccountEntity])],
  controllers: [GenreAccountController],
  providers: [GenreAccountService],
})
export class GenreAccountModule {}
