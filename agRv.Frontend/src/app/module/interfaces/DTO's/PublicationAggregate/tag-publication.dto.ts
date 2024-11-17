import { BaseSimpleDto } from '../Base/base-simple.dto';
import { PublicationDto } from './publication.dto';

export interface TagPublicationDto extends BaseSimpleDto {
  publication: PublicationDto[];
}
