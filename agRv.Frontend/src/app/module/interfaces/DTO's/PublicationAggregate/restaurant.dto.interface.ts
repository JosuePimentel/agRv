import { BaseDtoInterface } from '../Base/base.dto.interface';
import { DaysOpenDtoInterface } from './days-open.dto.interface';

export interface RestaurantDtoInterface extends BaseDtoInterface {
  daysOpen: DaysOpenDtoInterface[];
}
