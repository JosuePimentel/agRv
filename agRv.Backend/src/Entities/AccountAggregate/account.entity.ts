import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { GenreAccountEntity } from './genre-account.entity';
import { AddressEntity } from '../LocationAggregate/address.entity';
import { LinkAccountEntity } from '../LinksAggregate/linkAccount.entity';
import { PublicationEntity } from '../PublicationAggregate/publication.entity';

@Entity('accounts')
export class AccountEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ type: 'date', name: 'birth_date' })
  birthDate: Date;

  @Column()
  email: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  password: string;

  @ManyToOne(() => GenreAccountEntity, (genreAccount) => genreAccount.account, {
    nullable: false,
  })
  @JoinColumn({ name: 'genre_id' })
  genreAccount: GenreAccountEntity;

  @OneToOne(() => AddressEntity, { nullable: false })
  @JoinColumn({ name: 'address_id' })
  address: AddressEntity;

  @OneToMany(() => LinkAccountEntity, (linkAccount) => linkAccount.account)
  linkAccount: LinkAccountEntity[];

  @OneToMany(() => PublicationEntity, (publication) => publication.account)
  publication: PublicationEntity[];
}
