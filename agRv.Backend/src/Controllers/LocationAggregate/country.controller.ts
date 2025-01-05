import { CountryService } from 'src/Services/LocationAggregate/country.service';
import { BaseController } from '../Base/base.controller';
import { Controller } from '@nestjs/common';
import { CountryEntity } from 'src/Entities/LocationAggregate/country.entity';

@Controller('country')
export class CountryController extends BaseController<CountryEntity> {
  constructor(private readonly service: CountryService) {
    super(service);
  }
}
