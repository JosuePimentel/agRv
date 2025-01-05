import { Controller } from '@nestjs/common';
import { StateService } from 'src/Services/LocationAggregate/state.service';
import { BaseController } from '../Base/base.controller';
import { StateEntity } from 'src/Entities/LocationAggregate/state.entity';
import { CountryService } from 'src/Services/LocationAggregate/country.service';

@Controller('state')
export class StateController extends BaseController<StateEntity> {
  constructor(
    private readonly service: StateService,
    private readonly countryService: CountryService,
  ) {
    super(service);
  }
}
