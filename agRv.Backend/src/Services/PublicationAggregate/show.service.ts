import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { ShowEntity } from 'src/Entities/PublicationAggregate/show.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ShowService extends BaseService<ShowEntity> {
  constructor(
    @InjectRepository(ShowEntity)
    private readonly repo: Repository<ShowEntity>,
  ) {
    super(repo);
  }
}
