import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { AccountEntity } from './account.entity';

@Entity('genres_accounts')
export class GenreAccountEntity extends BaseEntity {
  @Column({ length: 30 })
  name: string;

  @OneToMany(() => AccountEntity, (account) => account.genreAccountId)
  accountId: string[];
}
