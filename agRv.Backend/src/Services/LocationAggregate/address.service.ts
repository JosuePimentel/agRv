import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from 'src/Entities/LocationAggregate/address.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class AddressService extends BaseService<AddressEntity> {
  constructor(
    @InjectRepository(AddressEntity)
    private readonly repo: Repository<AddressEntity>,
  ) {
    super(repo);
  }
}
