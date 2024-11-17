import { IsDate, IsNumber, IsString, ValidateNested } from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { Type } from 'class-transformer';
import { GenreFilmModel } from './genre-film.model';
import { PersonModel } from './person.model';
import { SectionModel } from './section.model';
import { AgeRatingModel } from './age-rating.model';
import { ProductionCompanyModel } from './production-company.model';

export class FilmModel extends BaseModel {
  @IsString()
  video: string;

  @IsDate()
  dateDebut: Date;

  @IsNumber()
  duration: number;

  @ValidateNested({ each: true })
  @Type(() => GenreFilmModel)
  genreFilm: GenreFilmModel[];

  @ValidateNested({ each: true })
  @Type(() => PersonModel)
  cast: PersonModel[];

  @ValidateNested()
  @Type(() => PersonModel)
  directionPerson: PersonModel;

  // @OneToMany(() => SectionEntity, (section) => section.film)
  section: SectionModel[];

  @ValidateNested()
  @Type(() => AgeRatingModel)
  ageRating: AgeRatingModel;

  @ValidateNested({ each: true })
  @Type(() => ProductionCompanyModel)
  productionCompany: ProductionCompanyModel[];
}
