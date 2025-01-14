import { BaseDtoInterface } from "../Base/base.dto.interface";
import { PublicationDtoInterface } from "./publication.dto.interface";

export interface PublicationPromotedBannerDtoInterface extends BaseDtoInterface {
  image: string;
  link?: string;
}
