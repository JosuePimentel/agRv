import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { GenreFilmEntity } from 'src/Entities/PublicationAggregate/genre-film.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GenreFilmService extends BaseService<GenreFilmEntity> {
  constructor(
    @InjectRepository(GenreFilmEntity)
    private readonly repo: Repository<GenreFilmEntity>,
  ) {
    super(repo);
  }
}
