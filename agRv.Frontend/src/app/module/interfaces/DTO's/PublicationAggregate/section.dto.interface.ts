import { BaseDtoInterface } from '../Base/base.dto.interface';
import { CinemaDtoInterface } from './cinema.dto.interface';
import { FilmDtoInterface } from './film.dto.interface';
import { TagSectionsDtoInterface } from './tag-section.dto.interface';

export interface SectionDtoInterface extends BaseDtoInterface {
  date: Date;
  amount: number;
  film: FilmDtoInterface;
  tagSection: TagSectionsDtoInterface[];
  cinema: CinemaDtoInterface;
}
