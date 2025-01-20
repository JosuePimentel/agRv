import { Controller, Get, Param } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import {
  PublicationEntity,
  PublicationTypeEnum,
} from 'src/Entities/PublicationAggregate/publication.entity';
import { PublicationService } from 'src/Services/PublicationAggregate/publication.service';

@Controller('publication')
export class PublicationController extends BaseController<PublicationEntity> {
  constructor(private readonly service: PublicationService) {
    super(service);
  }

  @Get('top-banner')
  async topBanner(): Promise<PublicationEntity[]> {
    return this.service.topBanner();
  }

  @Get('top-pubs/:type')
  async topPubs(
    @Param('type') type: PublicationTypeEnum,
  ): Promise<PublicationEntity[]> {
    return this.service.topPubs(type);
  }
}
