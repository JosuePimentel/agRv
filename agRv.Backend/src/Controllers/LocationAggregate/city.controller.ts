import { Controller } from '@nestjs/common';
import { CityEntity } from 'src/Entities/LocationAggregate/city.entity';
import { CityService } from 'src/Services/LocationAggregate/city.service';
import { BaseController } from '../Base/base.controller';

@Controller('city')
export class CityController extends BaseController<CityEntity> {
  constructor(private readonly service: CityService) {
    super(service);
  }
}
