import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { RestaurantEntity } from 'src/Entities/PublicationAggregate/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RestaurantDaysWeekEntity } from 'src/Entities/PublicationAggregate/restaurant-days-week.entity';
import { DaysOpenService } from './days-open.service';

@Injectable()
export class RestaurantService extends BaseService<RestaurantEntity> {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly repo: Repository<RestaurantEntity>,

    @InjectRepository(RestaurantDaysWeekEntity)
    private readonly restaurantDayRepository: Repository<RestaurantDaysWeekEntity>,

    private readonly daysOpenService: DaysOpenService,
  ) {
    super(repo);
  }

  async addRestaurantDay(
    restaurantDayWeek: RestaurantDaysWeekEntity[],
  ): Promise<void> {
    for (const restaurant of restaurantDayWeek) {
      const rest = await this.findOne({
        where: { id: restaurant.restaurantId },
      });
      const day = await await this.daysOpenService.findOne({
        where: { id: restaurant.daysOpenId },
      });

      restaurant.restaurant = rest;
      restaurant.daysOpen = day;
      await this.restaurantDayRepository.save(restaurant);
    }
  }

  async deleteRestaurantDay(idRes: string, idDays: string[]): Promise<void> {
    for (const day of idDays) {
      await this.restaurantDayRepository.delete({
        daysOpenId: day,
        restaurantId: idRes,
      });
    }
  }
}
