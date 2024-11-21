import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export class BaseLocationEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: 'point', nullable: true })
  location: string;

  @Column({ nullable: true })
  abbr: string;
}
