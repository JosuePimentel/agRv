import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { RestaurantEntity } from 'src/Entities/PublicationAggregate/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService extends BaseService<RestaurantEntity> {
  constructor(
    @InjectRepository(RestaurantEntity)
    private readonly repo: Repository<RestaurantEntity>,
  ) {
    super(repo);
  }
}
