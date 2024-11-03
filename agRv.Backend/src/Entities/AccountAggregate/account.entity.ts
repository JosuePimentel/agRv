import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

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
}
