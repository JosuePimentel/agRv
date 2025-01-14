import { BaseModelInterface } from "../Base/base.model.interface";

export interface FilmModelInterface extends BaseModelInterface {
  video: string;
  dateDebut: Date;
  duration: number;
  genreFilmId: string[];
  castIds?: string[];
  directionPersonId: string;
  sectionId: string[];
  ageRatingId: string;
  productionCompanyId: string[];
}
