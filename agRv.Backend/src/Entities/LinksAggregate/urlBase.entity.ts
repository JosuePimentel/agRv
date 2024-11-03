import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('Url_Base')
export class UrlBaseEntity extends BaseEntity {
  @Column()
  url: string;

  @Column()
  icon: string;

  @Column()
  name: string;
}
