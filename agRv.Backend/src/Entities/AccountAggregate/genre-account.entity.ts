import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('genre_accounts')
export class GenreAccountEntity extends BaseEntity {
  @Column()
  name: string;
}
