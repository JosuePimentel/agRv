import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DaysOpenController } from 'src/Controllers/PublicationAggregate/days-open.controller';
import { DaysOpenEntity } from 'src/Entities/PublicationAggregate/days-open.entity';
import { DaysOpenService } from 'src/Services/PublicationAggregate/days-open.service';

@Module({
  imports: [TypeOrmModule.forFeature([DaysOpenEntity])],
  controllers: [DaysOpenController],
  providers: [DaysOpenService],
  exports: [DaysOpenService],
})
export class DaysOpenModule {}
