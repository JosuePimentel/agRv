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
  @Column({ length: 200 })
  name: string;

  @Column({ type: 'date', name: 'birth_date' })
  birthDate: Date;

  @Column()
  email: string;

  @Column({ unique: true })
  CPF: string;

  @Column({ nullable: true })
  phone: string;

  @Column()
  password: string;

  @ManyToOne(() => GenreAccountEntity, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'genre_id' })
  genreAccountId: string;

  @OneToOne(() => AddressEntity, { eager: true, nullable: false })
  @JoinColumn({ name: 'address_id' })
  addressId: string;

  @OneToMany(() => LinkAccountEntity, (linkAccount) => linkAccount.accountId)
  linkAccountId: string[];

  @OneToMany(() => PublicationEntity, (publication) => publication.accountId)
  publicationId: string[];
}
