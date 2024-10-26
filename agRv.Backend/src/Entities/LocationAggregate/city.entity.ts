import { Column, Entity } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';

@Entity('Cities')
export class CityEntity extends BaseLocationEntity {
  @Column({ type: 'varchar' })
  CEP: string;
}
