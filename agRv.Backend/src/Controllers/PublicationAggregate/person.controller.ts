import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { PersonEntity } from 'src/Entities/PublicationAggregate/person.entity';

@Controller('person')
export class PersonController extends BaseController<PersonEntity> {
  constructor(private readonly service: PersonEntity) {
    super(service);
  }
}
