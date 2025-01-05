import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { PersonEntity } from 'src/Entities/PublicationAggregate/person.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PersonService extends BaseService<PersonEntity> {
  constructor(
    @InjectRepository(PersonEntity)
    private readonly repo: Repository<PersonEntity>,
  ) {
    super(repo);
  }
}
