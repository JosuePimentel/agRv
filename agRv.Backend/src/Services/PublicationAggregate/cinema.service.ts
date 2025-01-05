import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { CinemaEntity } from 'src/Entities/PublicationAggregate/cinema.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CinemaService extends BaseService<CinemaEntity> {
  constructor(
    @InjectRepository(CinemaEntity)
    private readonly repo: Repository<CinemaEntity>,
  ) {
    super(repo);
  }
}
