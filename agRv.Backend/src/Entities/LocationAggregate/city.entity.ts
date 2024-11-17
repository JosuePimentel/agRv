import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';
import { AddressEntity } from './address.entity';
import { StateEntity } from './state.entity';

@Entity('cities')
export class CityEntity extends BaseLocationEntity {
  @Column()
  CEP: string;

  @OneToMany(() => AddressEntity, (address) => address.city)
  address: AddressEntity[];

  @ManyToOne(() => StateEntity, (state) => state.city, {
    nullable: false,
  })
  @JoinColumn({ name: 'state_id' })
  state: StateEntity;

  @OneToMany(() => StateEntity, (state) => state.capitalCity)
  capitalOfState: StateEntity[];
}
