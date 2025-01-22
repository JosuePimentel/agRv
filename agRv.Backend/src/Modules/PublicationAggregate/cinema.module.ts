import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemaController } from 'src/Controllers/PublicationAggregate/cinema.controller';
import { CinemaEntity } from 'src/Entities/PublicationAggregate/cinema.entity';
import { CinemaService } from 'src/Services/PublicationAggregate/cinema.service';
import { DaysOpenModule } from './days-open.module';
import { CinemaDaysWeekEntity } from 'src/Entities/PublicationAggregate/cinema-days-week.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([CinemaEntity, CinemaDaysWeekEntity]),
    DaysOpenModule,
  ],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}
