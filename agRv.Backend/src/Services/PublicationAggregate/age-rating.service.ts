import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgeRatingEntity } from 'src/Entities/PublicationAggregate/age-rating.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class AgeRatingService extends BaseService<AgeRatingEntity> {
  constructor(
    @InjectRepository(AgeRatingEntity)
    private readonly repo: Repository<AgeRatingEntity>,
  ) {
    super(repo);
  }
}
