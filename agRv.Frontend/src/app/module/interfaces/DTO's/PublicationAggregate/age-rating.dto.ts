import { BaseDto } from '../Base/base.dto';

export interface AgeRatingDto extends BaseDto {
  age: number;
  // film: FilmDto[]; // Comentado porque não é necessário aqui
}
