import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { UrlBaseEntity } from './urlBase.entity';
import { PublicationEntity } from '../PublicationAggregate/publication.entity';

@Entity('link_publication')
export class LinkPublicationEntity extends BaseEntity {
  @Column()
  link: string;

  @ManyToOne(() => UrlBaseEntity, (urlBase) => urlBase.linkPublication, {
    nullable: false,
  })
  @JoinColumn({ name: 'url_base_id' })
  urlBase: UrlBaseEntity;

  @ManyToOne(
    () => PublicationEntity,
    (publication) => publication.linkPublication,
  )
  @JoinColumn({ name: 'publication_id' })
  publication: PublicationEntity;
}
