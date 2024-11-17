import { BaseModel } from '../Base/base.model';
import { TagPublicationModel } from './tag-publication.model';
import { FilmModel } from './film.model';
import { CinemaModel } from './cinema.model';
import { LinkPublicationModel } from '../LinksAggregate/linkPublication.model';
import { AddressModel } from '../LocationAggregate/address.model';
import { AccountModel } from '../AccountAggregate/account.model';
import { ShowModel } from './show.model';
import { RestaurantModel } from './restaurant.model';
import { PublicationTypeEnum } from '../../DTO\'s/PublicationAggregate/publication-type.enum';

export interface PublicationModel extends BaseModel {
  title: string;
  mainImage: string;
  longDesc: string;
  shortDesc: string;
  // @Column({ type: 'varchar', name: 'link_site', nullable: true })
  // linkSite: string;
  phone?: string;
  author: string;
  email: string;
  publicationTypeEnum: PublicationTypeEnum;
  film?: FilmModel;
  cinema?: CinemaModel;
  linkPublication: LinkPublicationModel[];
  show?: ShowModel;
  restaurant?: RestaurantModel;
  address: AddressModel;
  account: AccountModel;
  tagPublicationModel: TagPublicationModel;
}
