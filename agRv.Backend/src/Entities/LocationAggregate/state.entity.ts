import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';
import { CountryEntity } from './country.entity';

@Entity('States')
export class StateEntity extends BaseLocationEntity {
  @ManyToOne(() => CountryEntity, (Country) => Country.state)
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;
}
