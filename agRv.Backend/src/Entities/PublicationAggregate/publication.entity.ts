import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

export enum PublicationTypeEnum {
  'show',
  'cinema',
  'film',
  'pub',
  'rest',
}

@Entity('publications')
export class PublicationEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar', name: 'main_image' })
  mainImage: string;

  @Column({ type: 'varchar', name: 'long_desc' })
  longDesc: string;

  @Column({ type: 'varchar', name: 'short_desc' })
  shortDesc: string;

  @Column({ type: 'varchar', name: 'link_site' })
  linkSite: string;

  @Column({ type: 'varchar' })
  phone: string;

  @Column({ type: 'varchar' })
  author: string;

  @Column({ type: 'varchar' })
  email: string;

  @Column({
    type: 'enum',
    name: 'publication_type_enum',
    enum: PublicationTypeEnum,
    default: PublicationTypeEnum.pub,
  })
  publicationTypeEnum: PublicationTypeEnum;
}
