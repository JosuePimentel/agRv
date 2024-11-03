import { Column, Entity } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';

@Entity('Address')
export class AddressEntity extends BaseLocationEntity {
  @Column()
  CEP: string;

  @Column({ nullable: true })
  complement: string;
}
