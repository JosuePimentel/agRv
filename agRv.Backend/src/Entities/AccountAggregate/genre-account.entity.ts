import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { AccountEntity } from './account.entity';

@Entity('genre_accounts')
export class GenreAccountEntity extends BaseEntity {
  @Column()
  name: string;

  @OneToMany(() => AccountEntity, (account) => account.genreAccount)
  account: AccountEntity[];
}
