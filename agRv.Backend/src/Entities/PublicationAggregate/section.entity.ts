import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('sections')
export class SectionEntity extends BaseEntity {
  @Column({ type: 'timetz' })
  date: Date;

  @Column()
  amount: number;
}
