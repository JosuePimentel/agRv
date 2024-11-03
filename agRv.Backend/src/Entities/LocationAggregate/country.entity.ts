import { Entity, OneToMany } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';
import { StateEntity } from './state.entity';

@Entity('Countries')
export class CountryEntity extends BaseLocationEntity {
  @OneToMany(() => StateEntity, (State) => State.country)
  state: StateEntity[];
}
