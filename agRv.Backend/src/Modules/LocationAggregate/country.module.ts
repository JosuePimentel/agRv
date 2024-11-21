import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryController } from 'src/Controllers/LocationAggregate/country.controller';
import { CountryEntity } from 'src/Entities/LocationAggregate/country.entity';
import { CountryService } from 'src/Services/LocationAggregate/country.service';
import { StateModule } from './state.module';
import { CityModule } from './city.module';

@Module({
  imports: [TypeOrmModule.forFeature([CountryEntity]), StateModule, CityModule],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
