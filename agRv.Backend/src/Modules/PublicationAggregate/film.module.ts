import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmController } from 'src/Controllers/PublicationAggregate/film.controller';
import { FilmEntity } from 'src/Entities/PublicationAggregate/film.entity';
import { FilmService } from 'src/Services/PublicationAggregate/film.service';

@Module({
  imports: [TypeOrmModule.forFeature([FilmEntity])],
  controllers: [FilmController],
  providers: [FilmService],
})
export class FilmModule {}
