import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { SectionEntity } from 'src/Entities/PublicationAggregate/section.entity';
import { SectionService } from 'src/Services/PublicationAggregate/section.service';

@Controller('section')
export class SectionController extends BaseController<SectionEntity> {
  constructor(private readonly service: SectionService) {
    super(service);
  }
}
