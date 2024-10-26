import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('Link_Publication')
export class LinkPublicationEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  link: string;
}
