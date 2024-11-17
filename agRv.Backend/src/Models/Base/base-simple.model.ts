import { IsString } from 'class-validator';
import { BaseModel } from './base.model';

export class BaseSimpleModel extends BaseModel {
  @IsString()
  name: string;
}
