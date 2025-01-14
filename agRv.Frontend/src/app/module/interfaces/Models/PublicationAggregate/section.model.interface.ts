import { BaseModelInterface } from "../Base/base.model.interface";

export interface SectionModelInterface extends BaseModelInterface {
  date: Date;
  amount: number;
  tagSectionId: string[];
  cinemaId: string;
}
