import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from 'src/Entities/LocationAggregate/city.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class CityService extends BaseService<CityEntity> {
  constructor(
    @InjectRepository(CityEntity)
    private readonly repo: Repository<CityEntity>,
  ) {
    super(repo);
  }
}
