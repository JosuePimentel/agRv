import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DaysOpenEntity } from 'src/Entities/PublicationAggregate/days-open.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class DaysOpenService extends BaseService<DaysOpenEntity> {
  constructor(
    @InjectRepository(DaysOpenEntity)
    private readonly repo: Repository<DaysOpenEntity>,
  ) {
    super(repo);
  }
}
