import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CinemaController } from 'src/Controllers/PublicationAggregate/cinema.controller';
import { CinemaEntity } from 'src/Entities/PublicationAggregate/cinema.entity';
import { CinemaService } from 'src/Services/PublicationAggregate/cinema.service';
@Module({
  imports: [TypeOrmModule.forFeature([CinemaEntity])],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}
