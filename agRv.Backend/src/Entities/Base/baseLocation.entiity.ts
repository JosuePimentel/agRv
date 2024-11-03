import { Column, Point } from 'typeorm';
import { BaseEntity } from './base.entity';

export class BaseLocationEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: 'point' })
  location: Point;

  @Column({ nullable: true })
  abbr: string;
}
