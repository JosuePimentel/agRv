import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantController } from 'src/Controllers/PublicationAggregate/restaurant.controller';
import { RestaurantEntity } from 'src/Entities/PublicationAggregate/restaurant.entity';
import { RestaurantService } from 'src/Services/PublicationAggregate/restaurant.service';

@Module({
  imports: [TypeOrmModule.forFeature([RestaurantEntity])],
  controllers: [RestaurantController],
  providers: [RestaurantService],
})
export class RestaurantModule {}
