import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { UrlBaseEntity } from './urlBase.entity';
import { PublicationEntity } from '../PublicationAggregate/publication.entity';

@Entity('link_publication')
export class LinkPublicationEntity extends BaseEntity {
  @Column()
  link: string;

  @ManyToOne(() => UrlBaseEntity, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'url_base_id' })
  urlBaseId: string;

  @ManyToOne(() => PublicationEntity, { eager: true })
  @JoinColumn({ name: 'publication_id' })
  publicationId: string;
}
