import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { GenreFilmEntity } from 'src/Entities/PublicationAggregate/genre-film.entity';
import { GenreFilmService } from 'src/Services/PublicationAggregate/genre-film.service';

@Controller('genre-film')
export class GenreFilmController extends BaseController<GenreFilmEntity> {
  constructor(private readonly service: GenreFilmService) {
    super(service);
  }
}
