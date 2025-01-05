import { Entity, OneToMany } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';
import { StateEntity } from './state.entity';
import { PersonEntity } from '../PublicationAggregate/person.entity';

@Entity('countries')
export class CountryEntity extends BaseLocationEntity {
  @OneToMany(() => StateEntity, (State) => State.countryId)
  stateId: string[];

  @OneToMany(() => PersonEntity, (person) => person.countryId)
  personId: string[];
}
