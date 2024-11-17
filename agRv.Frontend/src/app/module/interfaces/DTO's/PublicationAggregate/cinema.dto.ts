import { BaseDto } from '../Base/base.dto';
import { SectionDto } from './section.dto';

export interface CinemaDto extends BaseDto {
  section: SectionDto[];
}
