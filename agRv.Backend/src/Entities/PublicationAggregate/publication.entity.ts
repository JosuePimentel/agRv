import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { FilmEntity } from './film.entity';
import { CinemaEntity } from './cinema.entity';
import { LinkPublicationEntity } from '../LinksAggregate/linkPublication.entity';
import { ShowEntity } from './show.entity';
import { RestaurantEntity } from './restaurant.entity';
import { AddressEntity } from '../LocationAggregate/address.entity';
import { AccountEntity } from '../AccountAggregate/account.entity';
import { TagPublicationEntity } from './tag-publication.entity';

export enum PublicationTypeEnum {
  'show',
  'cinema',
  'film',
  'pub',
  'rest',
}

@Entity('publications')
export class PublicationEntity extends BaseEntity {
  @Column()
  title: string;

  @Column({ type: 'varchar', name: 'main_image' })
  mainImage: string;

  @Column({ type: 'varchar', name: 'long_desc' })
  longDesc: string;

  @Column({ type: 'varchar', name: 'short_desc' })
  shortDesc: string;

  // @Column({ type: 'varchar', name: 'link_site', nullable: true })
  // linkSite: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  author: string;

  @Column()
  email: string;

  @Column({
    type: 'enum',
    name: 'publication_type_enum',
    enum: PublicationTypeEnum,
    default: PublicationTypeEnum.pub,
  })
  publicationTypeEnum: PublicationTypeEnum;

  @OneToOne(() => FilmEntity)
  @JoinColumn({ name: 'film_id' })
  film: FilmEntity;

  @OneToOne(() => CinemaEntity)
  @JoinColumn({ name: 'cinema_id' })
  cinema: CinemaEntity;

  @OneToMany(
    () => LinkPublicationEntity,
    (linkPublication) => linkPublication.publication,
  )
  linkPublication: LinkPublicationEntity[];

  @OneToOne(() => ShowEntity)
  @JoinColumn({ name: 'show_id' })
  show: ShowEntity;

  @OneToOne(() => RestaurantEntity)
  @JoinColumn({ name: 'restaurant_id' })
  restaurant: RestaurantEntity;

  @OneToOne(() => AddressEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'address_id' })
  address: AddressEntity;

  @ManyToOne(() => AccountEntity, (account) => account.publication, {
    nullable: false,
  })
  @JoinColumn({ name: 'account_id' })
  account: AccountEntity;

  @ManyToMany(() => TagPublicationEntity)
  @JoinTable({
    name: 'publication_tag_publication',
    inverseJoinColumn: {
      name: 'tag_publication_id',
      referencedColumnName: 'id',
    },
    joinColumn: {
      name: 'publication_id',
      referencedColumnName: 'id',
    },
  })
  tags: TagPublicationEntity[];

  @Column({ default: 0 })
  score: number;

  @Column({ default: false })
  promoted: boolean;
}
