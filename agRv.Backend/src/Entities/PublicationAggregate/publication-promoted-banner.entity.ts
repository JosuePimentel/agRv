import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('publications_promoted_banner')
export class PublicationPromotedBannerEntity extends BaseEntity {
  // @ManyToOne(() => PublicationEntity, { eager: true })
  // @JoinColumn({ name: 'publication_id' })
  // publicationId: string;

  @Column()
  image: string;

  @Column({ default: '' })
  link: string;
}
