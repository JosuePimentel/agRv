import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('Url_Base')
export class UrlBaseEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  url: string;

  @Column({ type: 'varchar' })
  icon: string;

  @Column({ type: 'varchar' })
  name: string;
}
