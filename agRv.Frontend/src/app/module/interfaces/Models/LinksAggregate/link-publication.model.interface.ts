import { BaseModelInterface } from "../Base/base.model.interface";

export interface LinkPublicationModelInterface extends BaseModelInterface {
  link: string;
  urlBaseId: string;
}
