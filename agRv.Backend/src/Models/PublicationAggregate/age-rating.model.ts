import { IsNumber } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class AgeRatingModel extends BaseModel {
  @IsNumber()
  age: number;

  // film: FilmModel[];
}
