import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('shows')
export class ShowEntity extends BaseEntity {
  @Column()
  fromAmountTicket: number;
}
