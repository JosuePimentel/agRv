import {
  Column,
  Entity,
  JoinColumn,
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
import { AccountEntity } from '../AccountAggregate/account.entity';
import { SectionEntity } from './section.entity';

export enum PublicationTypeEnum {
  'show',
  'cinema',
  'film',
  'new',
  'rest',
}

@Entity('publications')
export class PublicationEntity extends BaseEntity {
  @Column()
  title: string;

  @Column({ name: 'main_image' })
  mainImage: string;

  @Column({ name: 'long_desc' })
  longDesc: string;

  @Column({ name: 'short_desc' })
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
    default: PublicationTypeEnum.new,
  })
  publicationTypeEnum: PublicationTypeEnum;

  @OneToOne(() => FilmEntity, { eager: true })
  @JoinColumn({ name: 'film_id' })
  filmId: string;

  @OneToOne(() => CinemaEntity, { eager: true })
  @JoinColumn({ name: 'cinema_id' })
  cinemaId: string;

  @OneToMany(
    () => LinkPublicationEntity,
    (linkPublication) => linkPublication.publicationId,
  )
  linkPublicationId: string[];

  @OneToOne(() => ShowEntity, { eager: true })
  @JoinColumn({ name: 'show_id' })
  showId: string;

  @OneToOne(() => RestaurantEntity, { eager: true })
  @JoinColumn({ name: 'restaurant_id' })
  restaurantId: string;

  // @OneToOne(() => AddressEntity)
  // @JoinColumn({ name: 'address_id' })
  // addressId: string;

  @ManyToOne(() => AccountEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'account_id' })
  accountId: string;

  // @ManyToMany(() => TagPublicationEntity, { eager: true })
  // @JoinTable({
  //   name: 'publication_tag_publication',
  //   inverseJoinColumn: {
  //     name: 'tag_publication_id',
  //     referencedColumnName: 'id',
  //   },
  //   joinColumn: {
  //     name: 'publication_id',
  //     referencedColumnName: 'id',
  //   },
  // })
  // tagsId: string[];

  @Column({ default: 0 })
  score: number;

  @Column({ default: false })
  promoted: boolean;

  @OneToMany(() => SectionEntity, (section) => section.filmId)
  filmSectionId: string[];

  @OneToMany(() => SectionEntity, (section) => section.cinemaId)
  cinemaSectionId: string[];
  // @OneToMany(() => PublicationPromotedBannerEntity, (pub) => pub.publicationId)
  // publicationPromotedBannersId: string[];
}
