import { IsEnum, IsString, MaxLength, ValidateNested } from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { PublicationTypeEnum } from 'src/Entities/PublicationAggregate/publication.entity';
import { TagPublicationModel } from './tag-publication.model';
import { Type } from 'class-transformer';
import { FilmModel } from './film.model';
import { CinemaModel } from './cinema.model';
import { LinkPublicationModel } from '../LinksAggregate/linkPublication.model';
import { AddressModel } from '../LocationAggregate/address.model';
import { AccountModel } from '../AccountAggregate/account.model';
import { ShowModel } from './show.model';
import { RestaurantModel } from './restaurant.model';

export class PublicationModel extends BaseModel {
  @IsString()
  title: string;

  @IsString()
  mainImage: string;

  @IsString()
  longDesc: string;

  @IsString()
  @MaxLength(150)
  shortDesc: string;

  // @Column({ type: 'varchar', name: 'link_site', nullable: true })
  // linkSite: string;

  @IsString()
  phone?: string;

  @IsString()
  author: string;

  @IsString()
  email: string;

  @IsEnum(PublicationTypeEnum)
  publicationTypeEnum: PublicationTypeEnum;

  @ValidateNested()
  @Type(() => FilmModel)
  film?: FilmModel;

  @ValidateNested()
  @Type(() => CinemaModel)
  cinema?: CinemaModel;

  @ValidateNested({ each: true })
  @Type(() => LinkPublicationModel)
  linkPublication: LinkPublicationModel[];

  @ValidateNested()
  @Type(() => ShowModel)
  show?: ShowModel;

  @ValidateNested()
  @Type(() => RestaurantModel)
  restaurant?: RestaurantModel;

  @ValidateNested()
  @Type(() => AddressModel)
  address: AddressModel;

  @ValidateNested()
  @Type(() => AccountModel)
  account: AccountModel;

  @ValidateNested()
  @Type(() => TagPublicationModel)
  tagPublicationModel: TagPublicationModel;
}
