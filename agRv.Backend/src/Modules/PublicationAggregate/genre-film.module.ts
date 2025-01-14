import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenreFilmController } from 'src/Controllers/PublicationAggregate/genre-film.controller';
import { GenreFilmEntity } from 'src/Entities/PublicationAggregate/genre-film.entity';
import { GenreFilmService } from 'src/Services/PublicationAggregate/genre-film.service';

@Module({
  imports: [TypeOrmModule.forFeature([GenreFilmEntity])],
  controllers: [GenreFilmController],
  providers: [GenreFilmService],
})
export class GenreFilmModule {}
