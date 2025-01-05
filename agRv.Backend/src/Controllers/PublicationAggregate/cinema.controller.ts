import { Controller } from '@nestjs/common';
import { CinemaEntity } from 'src/Entities/PublicationAggregate/cinema.entity';
import { CinemaService } from 'src/Services/PublicationAggregate/cinema.service';
import { BaseController } from '../Base/base.controller';

@Controller('cinema')
export class CinemaController extends BaseController<CinemaEntity> {
  constructor(private readonly service: CinemaService) {
    super(service);
  }
}
