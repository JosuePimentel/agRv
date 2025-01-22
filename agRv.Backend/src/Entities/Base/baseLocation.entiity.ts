import { Column } from 'typeorm';
import { BaseEntity } from './base.entity';

export class BaseLocationEntity extends BaseEntity {
  @Column({ length: 150 })
  name: string;

  @Column({ type: 'point', nullable: true })
  location: string;

  @Column({ nullable: true })
  abbr: string;
}
