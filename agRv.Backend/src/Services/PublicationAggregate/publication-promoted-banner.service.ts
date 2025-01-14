import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PublicationPromotedBannerEntity } from 'src/Entities/PublicationAggregate/publication-promoted-banner.entity';

@Injectable()
export class PublicationPromotedBannerService extends BaseService<PublicationPromotedBannerEntity> {
  constructor(
    @InjectRepository(PublicationPromotedBannerEntity)
    private readonly repo: Repository<PublicationPromotedBannerEntity>,
  ) {
    super(repo);
  }
}
