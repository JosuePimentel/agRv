import { BaseModelInterface } from "../Base/base.model.interface";

export interface LinkAccountModelInterface extends BaseModelInterface {
  link: string;
  urlBaseId: string;
}
