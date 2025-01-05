import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilmEntity } from 'src/Entities/PublicationAggregate/film.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class FilmService extends BaseService<FilmEntity> {
  constructor(
    @InjectRepository(FilmEntity)
    private readonly repo: Repository<FilmEntity>,
  ) {
    super(repo);
  }
}
