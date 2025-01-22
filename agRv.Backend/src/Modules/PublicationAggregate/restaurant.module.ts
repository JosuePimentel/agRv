import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantController } from 'src/Controllers/PublicationAggregate/restaurant.controller';
import { RestaurantDaysWeekEntity } from 'src/Entities/PublicationAggregate/restaurant-days-week.entity';
import { RestaurantEntity } from 'src/Entities/PublicationAggregate/restaurant.entity';
import { RestaurantService } from 'src/Services/PublicationAggregate/restaurant.service';
import { DaysOpenModule } from './days-open.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([RestaurantEntity, RestaurantDaysWeekEntity]),
    DaysOpenModule,
  ],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
