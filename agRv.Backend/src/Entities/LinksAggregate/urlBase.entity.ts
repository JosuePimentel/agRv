import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('url_base')
export class UrlBaseEntity extends BaseEntity {
  @Column()
  url: string;

  @Column()
  icon: string;

  @Column()
  name: string;
}
