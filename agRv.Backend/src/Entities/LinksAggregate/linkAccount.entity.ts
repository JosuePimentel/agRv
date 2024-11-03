import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('Link_Account')
export class LinkAccountEntity extends BaseEntity {
  @Column()
  link: string;
}
