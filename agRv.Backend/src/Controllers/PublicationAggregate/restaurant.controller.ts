import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { RestaurantEntity } from 'src/Entities/PublicationAggregate/restaurant.entity';
import { RestaurantService } from 'src/Services/PublicationAggregate/restaurant.service';

@Controller('restaurant')
export class RestaurantController extends BaseController<RestaurantEntity> {
  constructor(private readonly service: RestaurantService) {
    super(service);
  }
}
