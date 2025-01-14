import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationController } from 'src/Controllers/PublicationAggregate/publication.controller';
import { PublicationEntity } from 'src/Entities/PublicationAggregate/publication.entity';
import { PublicationService } from 'src/Services/PublicationAggregate/publication.service';

@Module({
  imports: [TypeOrmModule.forFeature([PublicationEntity])],
  controllers: [PublicationController],
  providers: [PublicationService],
})
export class PublicationModule {}
