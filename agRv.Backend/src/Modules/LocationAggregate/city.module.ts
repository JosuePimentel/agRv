import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CityController } from 'src/Controllers/LocationAggregate/city.controller';
import { CityEntity } from 'src/Entities/LocationAggregate/city.entity';
import { StateEntity } from 'src/Entities/LocationAggregate/state.entity';
import { CityService } from 'src/Services/LocationAggregate/city.service';
import { AddressModule } from './address.module';

@Module({
  imports: [TypeOrmModule.forFeature([CityEntity, StateEntity]), AddressModule],
  controllers: [CityController],
  providers: [CityService],
})
export class CityModule {}
