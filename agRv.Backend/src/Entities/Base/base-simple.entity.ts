import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export class BaseSimpleEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;
}