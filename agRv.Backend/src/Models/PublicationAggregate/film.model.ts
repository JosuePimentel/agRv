import {
  IsArray,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class FilmModel extends BaseModel {
  @IsString()
  video: string;

  @IsDateString()
  dateDebut: Date;

  @IsNumber()
  duration: number;

  @IsArray()
  @IsString({ each: true })
  genreFilmId: string[];

  @IsOptional({ each: true })
  @IsArray()
  @IsString({ each: true })
  castIds?: string[];

  @IsString()
  directionPersonId: string;

  // @OneToMany(() => SectionEntity, (section) => section.film)
  @IsArray()
  @IsString({ each: true })
  sectionId: string[];

  @IsString()
  ageRatingId: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  productionCompanyId: string[];
}
