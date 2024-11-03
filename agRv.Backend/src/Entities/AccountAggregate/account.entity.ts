import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { GenreAccountEntity } from './genre-account.entity';
import { AddressEntity } from '../LocationAggregate/address.entity';

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

  @ManyToOne(() => GenreAccountEntity, (genreAccount) => genreAccount.account)
  @JoinColumn({ name: 'genre_id' })
  genreAccount: GenreAccountEntity;

  @OneToOne(() => AddressEntity)
  @JoinColumn({ name: 'address_id' })
  address: AddressEntity;
}
