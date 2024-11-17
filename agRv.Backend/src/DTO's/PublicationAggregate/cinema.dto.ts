import { BaseDto } from '../Base/base.dto';
import { SectionDto } from './section.dto';

export class CinemaDto extends BaseDto {
  section: SectionDto[];
}
