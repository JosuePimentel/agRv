import { IsDateString, IsNumber, ValidateNested } from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { Type } from 'class-transformer';
import { TagSectionsModel } from './tag-section.model';
import { CinemaModel } from './cinema.model';

export class SectionModel extends BaseModel {
  @IsDateString()
  date: Date;

  @IsNumber()
  amount: number;

  // film: FilmModel;

  @ValidateNested({ each: true })
  @Type(() => TagSectionsModel)
  tagSection: TagSectionsModel[];

  @ValidateNested()
  @Type(() => CinemaModel)
  cinema: CinemaModel;
}
