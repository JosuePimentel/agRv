import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { TagPublicationEntity } from 'src/Entities/PublicationAggregate/tag-publication.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagPublicationService extends BaseService<TagPublicationEntity> {
  constructor(
    @InjectRepository(TagPublicationEntity)
    private readonly repo: Repository<TagPublicationEntity>,
  ) {
    super(repo);
  }
}
