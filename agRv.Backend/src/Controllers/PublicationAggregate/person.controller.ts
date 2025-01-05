import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { PersonEntity } from 'src/Entities/PublicationAggregate/person.entity';
import { PersonService } from 'src/Services/PublicationAggregate/person.service';

@Controller('person')
export class PersonController extends BaseController<PersonEntity> {
  constructor(private readonly service: PersonService) {
    super(service);
  }
}
