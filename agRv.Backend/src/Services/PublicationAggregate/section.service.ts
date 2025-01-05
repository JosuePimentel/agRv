import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { SectionEntity } from 'src/Entities/PublicationAggregate/section.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SectionService extends BaseService<SectionEntity> {
  constructor(
    @InjectRepository(SectionEntity)
    private readonly repo: Repository<SectionEntity>,
  ) {
    super(repo);
  }
}
