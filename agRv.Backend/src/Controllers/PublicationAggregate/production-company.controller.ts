import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { ProductionCompanyEntity } from 'src/Entities/PublicationAggregate/production-company.entity';
import { ProductionCompanyService } from 'src/Services/PublicationAggregate/production-company.service';

@Controller('production-company')
export class ProductionCompanyController extends BaseController<ProductionCompanyEntity> {
  constructor(private readonly service: ProductionCompanyService) {
    super(service);
  }
}
