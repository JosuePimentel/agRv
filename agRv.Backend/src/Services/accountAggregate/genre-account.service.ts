import { Injectable, NotFoundException } from '@nestjs/common';
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

  async create(model: GenreAccountModel): Promise<GenreAccountDto> {
    const genreAccountDB = new GenreAccountEntity();
    genreAccountDB.name = model.name;

    const genreAccount: GenreAccountDto =
      await this.genreAccountRepository.save(genreAccountDB);

    return genreAccount;
  }

  async findAll(): Promise<GenreAccountDto[]> {
    return (await this.genreAccountRepository.find()) ?? [];
  }

  async findOne(_id: string): Promise<GenreAccountDto> {
    const genreAccount = await this.genreAccountRepository.findOne({
      where: { id: _id },
    });

    if (!genreAccount) {
      throw new NotFoundException(`Genre account with ID "${_id}" not found`);
    }

    return genreAccount;
  }

  async delete(_id: string): Promise<void> {
    const genreAccount = await this.findOne(_id);

    if (!genreAccount) {
      throw new NotFoundException(`Genre account with ID "${_id}" not found`);
    }

    this.genreAccountRepository.delete(_id);
  }

  async update(_id: string, model: Partial<GenreAccountDto>) {
    const genreAccount = await this.findOne(_id);

    if (!genreAccount) {
      throw new NotFoundException(`Genre account with ID "${_id}" not found`);
    }

    await this.genreAccountRepository.update(_id, model);

    return await this.findOne(_id);
  }
}
