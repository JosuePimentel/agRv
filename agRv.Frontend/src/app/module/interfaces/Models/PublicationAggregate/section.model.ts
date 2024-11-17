import { BaseModel } from '../Base/base.model';
import { TagSectionsModel } from './tag-section.model';
import { CinemaModel } from './cinema.model';

export interface SectionModel extends BaseModel {
  date: Date;
  amount: number;
  // film: FilmModel;
  tagSection: TagSectionsModel[];
  cinema: CinemaModel;
}
