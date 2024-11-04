import { Entity, OneToMany } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';
import { StateEntity } from './state.entity';
import { PersonEntity } from '../PublicationAggregate/person.entity';

@Entity('countries')
export class CountryEntity extends BaseLocationEntity {
  @OneToMany(() => StateEntity, (State) => State.country)
  state: StateEntity[];

  @OneToMany(() => PersonEntity, (person) => person.country)
  person: PersonEntity[];
}
