import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { PublicationEntity } from 'src/Entities/PublicationAggregate/publication.entity';
import { PublicationService } from 'src/Services/PublicationAggregate/publication.service';

@Controller('publication')
export class PublicationController extends BaseController<PublicationEntity> {
  constructor(private readonly service: PublicationService) {
    super(service);
  }
}
