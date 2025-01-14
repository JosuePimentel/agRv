import { BaseDtoInterface } from "../Base/base.dto.interface";
import { SectionDtoInterface } from "./section.dto.interface";

export interface CinemaDtoInterface extends BaseDtoInterface {
  section: SectionDtoInterface[];
}
