import { Controller } from '@nestjs/common';
import { DaysOpenEntity } from 'src/Entities/PublicationAggregate/days-open.entity';
import { DaysOpenService } from 'src/Services/PublicationAggregate/days-open.service';
import { BaseController } from '../Base/base.controller';

@Controller('days-open')
export class DaysOpenController extends BaseController<DaysOpenEntity> {
  constructor(private readonly service: DaysOpenService) {
    super(service);
  }
}
