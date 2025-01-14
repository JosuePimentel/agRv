import { PublicationEnumInterface } from "../../DTO's/PublicationAggregate/publication-type.dto.interface";
import { BaseModelInterface } from "../Base/base.model.interface";

export interface PublicationModelInterface extends BaseModelInterface {
  title: string;
  mainImage: string;
  longDesc: string;
  shortDesc: string;
  phone?: string;
  author: string;
  email: string;
  publicationTypeEnum: PublicationEnumInterface;
  filmId?: string;
  cinemaId?: string;
  linkPublicationId: string[];
  showId?: string;
  restaurantId?: string;
  addressId?: string;
  accountId: string;
  tagsId: string;
  // acho que nao precisa das linhas abaixo
  // @IsNumber()
  // score: number;

  // @IsBoolean()
  // promoted: boolean;
}
