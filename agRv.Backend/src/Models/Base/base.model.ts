import { IsString } from 'class-validator';

export class BaseModel {
  @IsString()
  id: string;
}
