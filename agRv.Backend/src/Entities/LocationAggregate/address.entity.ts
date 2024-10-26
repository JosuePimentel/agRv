import { Column, Entity } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';

@Entity('Address')
export class AddressEntity extends BaseLocationEntity {
  @Column({ type: 'varchar' })
  CEP: string;

  @Column({ type: 'varchar', nullable: true })
  complement: string;
}
