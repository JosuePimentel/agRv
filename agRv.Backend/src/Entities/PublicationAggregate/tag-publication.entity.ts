import { Entity, JoinTable, ManyToMany } from 'typeorm';
import { BaseSimpleEntity } from '../Base/base-simple.entity';
import { PublicationEntity } from './publication.entity';

@Entity('tags_publications')
export class TagPublicationEntity extends BaseSimpleEntity {
  @ManyToMany(() => PublicationEntity)
  @JoinTable({
    name: 'tag_publication_publication',
    joinColumn: {
      name: 'tag_publication_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'publication_id',
      referencedColumnName: 'id',
    },
  })
  publication: PublicationEntity[];
}
