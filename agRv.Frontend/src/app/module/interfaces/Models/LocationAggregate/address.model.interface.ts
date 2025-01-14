import { BaseLocationModelInterface } from "../Base/baseLocation.model.interface";

export interface AddressModelInterface extends BaseLocationModelInterface {
  CEP: string;
  complement?: string;
  cityId: string;
}
