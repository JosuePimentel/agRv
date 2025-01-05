import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from 'src/Entities/LocationAggregate/state.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class StateService extends BaseService<StateEntity> {
  constructor(
    @InjectRepository(StateEntity)
    private readonly repo: Repository<StateEntity>,
  ) {
    super(repo);
  }
}
