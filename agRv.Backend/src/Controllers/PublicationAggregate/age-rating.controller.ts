import { Controller } from '@nestjs/common';
import { AgeRatingService } from 'src/Services/PublicationAggregate/age-rating.service';
import { BaseController } from '../Base/base.controller';
import { AgeRatingEntity } from 'src/Entities/PublicationAggregate/age-rating.entity';

@Controller('age-rating')
export class AgeRatingController extends BaseController<AgeRatingEntity> {
  constructor(private readonly service: AgeRatingService) {
    super(service);
  }
}
