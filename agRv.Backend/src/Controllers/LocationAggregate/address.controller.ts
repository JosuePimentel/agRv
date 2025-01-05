import { Controller } from '@nestjs/common';
import { AddressService } from 'src/Services/LocationAggregate/address.service';
import { BaseController } from '../Base/base.controller';
import { AddressEntity } from 'src/Entities/LocationAggregate/address.entity';

@Controller('address')
export class AddressController extends BaseController<AddressEntity> {
  constructor(private readonly service: AddressService) {
    super(service);
  }
}
