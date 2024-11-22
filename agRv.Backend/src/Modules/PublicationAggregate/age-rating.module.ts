import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgeRatingController } from 'src/Controllers/PublicationAggregate/age-rating.controller';
import { AgeRatingEntity } from 'src/Entities/PublicationAggregate/age-rating.entity';
import { AgeRatingService } from 'src/Services/PublicationAggregate/age-rating.service';

@Module({
  imports: [TypeOrmModule.forFeature([AgeRatingEntity])],
  controllers: [AgeRatingController],
  providers: [AgeRatingService],
})
export class AgeRatingModule {}
