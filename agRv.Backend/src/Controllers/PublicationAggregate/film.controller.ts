import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { FilmEntity } from 'src/Entities/PublicationAggregate/film.entity';
import { FilmService } from 'src/Services/PublicationAggregate/film.service';

@Controller('film')
export class FilmController extends BaseController<FilmEntity> {
  constructor(private readonly service: FilmService) {
    super(service);
  }
}
