import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateController } from 'src/Controllers/LocationAggregate/state.controller';
import { CountryEntity } from 'src/Entities/LocationAggregate/country.entity';
import { StateEntity } from 'src/Entities/LocationAggregate/state.entity';
import { CountryService } from 'src/Services/LocationAggregate/country.service';
import { StateService } from 'src/Services/LocationAggregate/state.service';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity, CountryEntity])],
  controllers: [StateController],
  providers: [StateService, CountryService],
})
export class StateModule {}
