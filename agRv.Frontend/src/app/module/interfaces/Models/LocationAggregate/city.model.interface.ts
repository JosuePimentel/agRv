import { BaseLocationModelInterface } from '../Base/baseLocation.model.interface';
export interface CityModelInterface extends BaseLocationModelInterface {
  CEP: string;
  stateId: string;
}
