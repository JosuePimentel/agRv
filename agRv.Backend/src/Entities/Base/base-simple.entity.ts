import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export class BaseSimpleEntity extends BaseEntity {
  @Column({ length: 150 })
  name: string;
}
