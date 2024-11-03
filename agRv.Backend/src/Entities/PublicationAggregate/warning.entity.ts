import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('warnings')
export class WarningEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  icon: string;

  @Column({ type: 'varchar' })
  desc: string;
}
