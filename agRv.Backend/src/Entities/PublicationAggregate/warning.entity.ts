import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('warnings')
export class WarningEntity extends BaseEntity {
  @Column()
  icon: string;

  @Column()
  desc: string;
}
