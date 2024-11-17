import { PublicationTypeEnum } from 'src/Entities/PublicationAggregate/publication.entity';
import { BaseDto } from '../Base/base.dto';
import { FilmDto } from './film.dto';
import { CinemaDto } from './cinema.dto';
import { AddressDto } from '../LocationAggregate/address.dto';
import { LinkPublicationDto } from '../LinksAggregate/linkPublication.dto';
import { ShowDto } from './show.dto';
import { RestaurantDto } from './restaurant.dto';
import { TagPublicationDto } from './tag-publication.dto';

export class PublicationDto extends BaseDto {
  title: string;
  mainImage: string;
  longDesc: string;
  shortDesc: string;
  // linkSite: string;
  phone?: string;
  author: string;
  email: string;
  publicationTypeEnum: PublicationTypeEnum = PublicationTypeEnum.pub;
  film?: FilmDto;
  cinema?: CinemaDto;
  show?: ShowDto;
  restaurant?: RestaurantDto;
  linkPublication: LinkPublicationDto[];
  address: AddressDto;
  tags: TagPublicationDto[];
  score: number;
  promoted: boolean;
  // account: AccountDto;
}
