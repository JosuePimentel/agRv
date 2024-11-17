import { BaseSimpleDto } from '../Base/base-simple.dto';
import { PublicationDto } from './publication.dto';

export class TagPublicationDto extends BaseSimpleDto {
  publication: PublicationDto[];
}
