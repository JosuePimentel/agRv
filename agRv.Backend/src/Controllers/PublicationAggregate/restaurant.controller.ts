import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { RestaurantEntity } from 'src/Entities/PublicationAggregate/restaurant.entity';
import { RestaurantService } from 'src/Services/PublicationAggregate/restaurant.service';
import { RestaurantDaysWeekEntity } from 'src/Entities/PublicationAggregate/restaurant-days-week.entity';

@Controller('restaurant')
export class RestaurantController extends BaseController<RestaurantEntity> {
  constructor(private readonly service: RestaurantService) {
    super(service);
  }

  @Post('/add-day')
  async AddDay(@Body() model: RestaurantDaysWeekEntity[]): Promise<void> {
    await this.service.addRestaurantDay(model);
  }

  @Delete('/remove-day/:idCin')
  async DeleteDay(
    @Param('idCin') idCin: string,
    @Body() idDays: string[],
  ): Promise<void> {
    await this.service.deleteRestaurantDay(idCin, idDays);
  }
}
