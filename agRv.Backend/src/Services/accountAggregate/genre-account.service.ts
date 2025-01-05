import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenreAccountEntity } from 'src/Entities/AccountAggregate/genre-account.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class GenreAccountService extends BaseService<GenreAccountEntity> {
  constructor(
    @InjectRepository(GenreAccountEntity)
    private readonly repo: Repository<GenreAccountEntity>,
  ) {
    super(repo);
  }
}
