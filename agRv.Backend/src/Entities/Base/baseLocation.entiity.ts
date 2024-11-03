import { Column, Point } from 'typeorm';
import { BaseEntity } from './base.entity';

export class BaseLocationEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'point' })
  location: Point;

  @Column({ type: 'varchar', nullable: true })
  abbr: string;
}
