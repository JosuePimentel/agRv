import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductionCompanyController } from 'src/Controllers/PublicationAggregate/production-company.controller';
import { ProductionCompanyEntity } from 'src/Entities/PublicationAggregate/production-company.entity';
import { ProductionCompanyService } from 'src/Services/PublicationAggregate/production-company.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductionCompanyEntity])],
  controllers: [ProductionCompanyController],
  providers: [ProductionCompanyService],
})
export class ProductionCompanyModule {}
