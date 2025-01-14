import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagSectionController } from 'src/Controllers/PublicationAggregate/tag-section.controller';
import { TagSectionsEntity } from 'src/Entities/PublicationAggregate/tag-section.entity';
import { TagSectionService } from 'src/Services/PublicationAggregate/tag-section.service';

@Module({
  imports: [TypeOrmModule.forFeature([TagSectionsEntity])],
  controllers: [TagSectionController],
  providers: [TagSectionService],
})
export class TagSectionModule {}
