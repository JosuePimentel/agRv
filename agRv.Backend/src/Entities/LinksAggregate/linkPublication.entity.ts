import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('link_publication')
export class LinkPublicationEntity extends BaseEntity {
  @Column()
  link: string;
}
