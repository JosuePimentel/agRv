import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenreAccountDto } from "src/DTO's/AccountAggregate/genre-account.dto";
import { GenreAccountEntity } from 'src/Entities/AccountAggregate/genre-account.entity';
import { GenreAccountModel } from 'src/Models/AccountAggregate/genre-account.model';
import { Repository } from 'typeorm';

@Injectable()
export class GenreAccountService {
  constructor(
    @InjectRepository(GenreAccountEntity)
    private readonly genreAccountRepository: Repository<GenreAccountEntity>,
  ) {}

  async create(newGenre: GenreAccountModel): Promise<GenreAccountDto> {
    const genreAccountDB = new GenreAccountEntity();
    genreAccountDB.name = newGenre.name;

    const genreAccount: GenreAccountDto =
      await this.genreAccountRepository.save(genreAccountDB);

    return genreAccount;
  }

  async findAll(): Promise<GenreAccountDto[]> {
    return (await this.genreAccountRepository.find()) ?? [];
  }
}
