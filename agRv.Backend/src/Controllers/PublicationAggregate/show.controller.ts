import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { ShowEntity } from 'src/Entities/PublicationAggregate/show.entity';
import { ShowService } from 'src/Services/PublicationAggregate/show.service';

@Controller('show')
export class ShowController extends BaseController<ShowEntity> {
  constructor(private readonly service: ShowService) {
    super(service);
  }
}
