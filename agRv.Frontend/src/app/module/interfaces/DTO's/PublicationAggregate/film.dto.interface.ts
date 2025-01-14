import { BaseDtoInterface } from '../Base/base.dto.interface';
import { AgeRatingDtoInteface } from './age-rating.dto.interface';
import { GenreFilmDtoInterface } from './genre-film.dto.interface';
import { PersonDtoInterface } from './person.dto.interface';
import { ProductionCompanyDtoInterface } from './production-company.dto.inteface';
import { SectionDtoInterface } from './section.dto.interface';

export interface FilmDtoInterface extends BaseDtoInterface {
  video: string;
  dateDebut: Date;
  duration: number;
  genreFilm: GenreFilmDtoInterface[];
  cast: PersonDtoInterface[];
  directionPerson: PersonDtoInterface;
  section: SectionDtoInterface[];
  ageRating: AgeRatingDtoInteface;
  productionCompany: ProductionCompanyDtoInterface[];
}
