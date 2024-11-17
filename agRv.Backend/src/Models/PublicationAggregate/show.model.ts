import { IsNumber, IsPositive } from 'class-validator';
import { BaseModel } from '../Base/base.model';

export class ShowModel extends BaseModel {
  @IsNumber()
  @IsPositive()
  fromAmountTicket: number;
}
