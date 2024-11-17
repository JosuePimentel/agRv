import { BaseDto } from '../Base/base.dto';
import { AgeRatingDto } from './age-rating.dto';
import { GenreFilmDto } from './genre-film.dto';
import { PersonDto } from './person.dto';
import { ProductionCompanyDto } from './production-company.dto';
import { SectionDto } from './section.dto';

export class FilmDto extends BaseDto {
  video: string;
  dateDebut: Date;
  duration: number;
  genreFilm: GenreFilmDto[];
  cast: PersonDto[];
  directionPerson: PersonDto;
  section: SectionDto[];
  ageRating: AgeRatingDto;
  productionCompany: ProductionCompanyDto[];
}
