import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { PublicationPromotedBannerEntity } from 'src/Entities/PublicationAggregate/publication-promoted-banner.entity';
import { PublicationPromotedBannerService } from 'src/Services/PublicationAggregate/publication-promoted-banner.service';

@Controller('publication-banner')
export class PublicationPromotedBannerController extends BaseController<PublicationPromotedBannerEntity> {
  constructor(private readonly service: PublicationPromotedBannerService) {
    super(service);
  }
}
