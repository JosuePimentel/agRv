import { IsArray, IsDateString, IsNumber, IsString } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class SectionModel extends BaseModel {
  @IsDateString()
  date: Date;

  @IsNumber()
  amount: number;

  // film: FilmModel;

  @IsArray()
  @IsString({ each: true })
  tagSectionId: string[];

  @IsString()
  cinemaId: string;
}
