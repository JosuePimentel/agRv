import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { ProductionCompanyEntity } from 'src/Entities/PublicationAggregate/production-company.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductionCompanyService extends BaseService<ProductionCompanyEntity> {
  constructor(
    @InjectRepository(ProductionCompanyEntity)
    private readonly repo: Repository<ProductionCompanyEntity>,
  ) {
    super(repo);
  }
}
