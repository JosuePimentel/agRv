import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagPublicationController } from 'src/Controllers/PublicationAggregate/tag-publication.controller';
import { TagPublicationEntity } from 'src/Entities/PublicationAggregate/tag-publication.entity';
import { TagPublicationService } from 'src/Services/PublicationAggregate/tag-publication.service';

@Module({
  imports: [TypeOrmModule.forFeature([TagPublicationEntity])],
  controllers: [TagPublicationController],
  providers: [TagPublicationService],
})
export class TagPublicationModule {}
