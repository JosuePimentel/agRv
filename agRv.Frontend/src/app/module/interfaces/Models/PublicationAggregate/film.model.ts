import { BaseModel } from '../Base/base.model';
import { GenreFilmModel } from './genre-film.model';
import { PersonModel } from './person.model';
import { SectionModel } from './section.model';
import { AgeRatingModel } from './age-rating.model';
import { ProductionCompanyModel } from './production-company.model';

export interface FilmModel extends BaseModel {
  video: string;
  dateDebut: Date;
  duration: number;
  genreFilm: GenreFilmModel[];
  cast: PersonModel[];
  directionPerson: PersonModel;
  // @OneToMany(() => SectionEntity, (section) => section.film)
  section: SectionModel[];
  ageRating: AgeRatingModel;
  productionCompany: ProductionCompanyModel[];
}
