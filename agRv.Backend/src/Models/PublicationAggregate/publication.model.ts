import {
  IsArray,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { BaseModel } from '../Base/base.model';
import { PublicationTypeEnum } from 'src/Entities/PublicationAggregate/publication.entity';

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
  @IsOptional()
  phone?: string;

  @IsString()
  author: string;

  @IsString()
  email: string;

  @IsEnum(PublicationTypeEnum)
  publicationTypeEnum: PublicationTypeEnum;

  @IsOptional()
  @IsString()
  filmId?: string;

  @IsOptional()
  @IsString()
  cinemaId?: string;

  @IsArray()
  @IsString({ each: true })
  linkPublicationId: string[];

  @IsOptional()
  @IsString()
  showId?: string;

  @IsOptional()
  @IsString()
  restaurantId?: string;

  @IsOptional()
  @IsString()
  addressId?: string;

  @IsString()
  accountId: string;

  @IsString()
  tagsId: string;

  // acho que nao precisa das linhas abaixo
  // @IsNumber()
  // score: number;

  // @IsBoolean()
  // promoted: boolean;
}
