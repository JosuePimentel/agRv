import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectionController } from 'src/Controllers/PublicationAggregate/section.controller';
import { SectionEntity } from 'src/Entities/PublicationAggregate/section.entity';
import { SectionService } from 'src/Services/PublicationAggregate/section.service';

@Module({
  imports: [TypeOrmModule.forFeature([SectionEntity])],
  controllers: [SectionController],
  providers: [SectionService],
})
export class SectionModule {}
