import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';
import { AddressEntity } from './address.entity';
import { StateEntity } from './state.entity';

@Entity('cities')
export class CityEntity extends BaseLocationEntity {
  @Column({ length: 10 })
  CEP: string;

  @OneToMany(() => AddressEntity, (address) => address.cityId)
  addressId: string[];

  @ManyToOne(() => StateEntity, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'state_id' })
  stateId: string;
}
