import { BaseDtoInterface } from "../Base/base.dto.interface";
import { UrlBaseDtoInterface } from "./urlBase.dto.interface";

export interface LinkPublicationDtoInterface extends BaseDtoInterface {
  link: string;
  urlBase: UrlBaseDtoInterface;
  // publication: PublicationDto;
}
