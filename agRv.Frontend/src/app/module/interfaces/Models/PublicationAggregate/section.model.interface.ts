import { BaseModelInterface } from "../Base/base.model.interface";

export interface SectionModelInterface extends BaseModelInterface {
  beginDate: Date;
  endDate: Date;
  time: string;
  amount: number;
  filmId: string;
  cinemaId: string;
}
