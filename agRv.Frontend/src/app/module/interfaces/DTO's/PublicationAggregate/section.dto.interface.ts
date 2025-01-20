import { BaseDtoInterface } from '../Base/base.dto.interface';
import { PublicationDtoInterface } from './publication.dto.interface';

export interface SectionDtoInterface extends BaseDtoInterface {
  beginDate: Date;
  endDate: Date;
  time: string;
  amount: number;
  filmId: PublicationDtoInterface;
  cinema: PublicationDtoInterface;
}
