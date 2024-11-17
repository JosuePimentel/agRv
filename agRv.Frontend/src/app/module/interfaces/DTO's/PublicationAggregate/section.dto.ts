import { BaseDto } from '../Base/base.dto';
import { CinemaDto } from './cinema.dto';
import { FilmDto } from './film.dto';
import { TagSectionsDto } from './tag-section.dto';

export interface SectionDto extends BaseDto {
  date: Date;
  amount: number;
  film: FilmDto;
  tagSection: TagSectionsDto[];
  cinema: CinemaDto;
}
