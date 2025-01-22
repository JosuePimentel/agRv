import { BaseDtoInterface } from '../Base/base.dto.interface';
import { LinkPublicationDtoInterface } from '../LinksAggregate/linkPublication.dto';
import { AddressDtoInterface } from '../LocationAggregate/address.dto.interface';
import { FilmDtoInterface } from './film.dto.interface';
import { CinemaDtoInterface } from './cinema.dto.interface';
import { ShowDtoInterface } from './show.dto.inteface';
import { RestaurantDtoInterface } from './restaurant.dto.interface';
import { TagPublicationDtoInterface } from './tag-publication.dto.interface';
import { PublicationEnumInterface } from './publication-type.dto.interface';

export interface PublicationDtoInterface extends BaseDtoInterface {
  title: string;
  mainImage: string;
  longDesc: string;
  shortDesc: string;
  phone?: string;
  author: string;
  email: string;
  publicationTypeEnum: PublicationEnumInterface;
  filmId?: FilmDtoInterface;
  cinemaId?: CinemaDtoInterface;
  showId?: ShowDtoInterface;
  restaurantId?: RestaurantDtoInterface;
  linkPublicationId: LinkPublicationDtoInterface[];
  score: number;
  promoted: boolean;
  // account: AccountDto;
}
