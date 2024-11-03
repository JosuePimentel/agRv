import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('link_account')
export class LinkAccountEntity extends BaseEntity {
  @Column()
  link: string;
}
