import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from 'src/Controllers/LocationAggregate/city.controller';
import { CityEntity } from 'src/Entities/LocationAggregate/city.entity';
import { CityService } from 'src/Services/LocationAggregate/city.service';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity])],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
