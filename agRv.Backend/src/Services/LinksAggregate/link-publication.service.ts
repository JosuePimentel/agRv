import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkPublicationEntity } from 'src/Entities/LinksAggregate/linkPublication.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class LinkPublicationService extends BaseService<LinkPublicationEntity> {
  constructor(
    @InjectRepository(LinkPublicationEntity)
    private readonly repo: Repository<LinkPublicationEntity>,
  ) {
    super(repo);
  }
}
