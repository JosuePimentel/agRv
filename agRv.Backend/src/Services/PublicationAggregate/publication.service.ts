import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import {
  PublicationEntity,
  PublicationTypeEnum,
} from 'src/Entities/PublicationAggregate/publication.entity';
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

  async topBanner(): Promise<PublicationEntity[]> {
    return await this.repo.find({ order: { score: 'DESC' }, take: 10 });
  }

  async topPubs(type: PublicationTypeEnum): Promise<PublicationEntity[]> {
    return await this.repo.find({
      order: { score: 'DESC' },
      take: 10,
      where: { publicationTypeEnum: type },
    });
  }
}
