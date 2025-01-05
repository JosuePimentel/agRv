import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { PublicationEntity } from 'src/Entities/PublicationAggregate/publication.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PublicationService extends BaseService<PublicationEntity> {
  constructor(
    @InjectRepository(PublicationEntity)
    private readonly repo: Repository<PublicationEntity>,
  ) {
    super(repo);
  }
}
