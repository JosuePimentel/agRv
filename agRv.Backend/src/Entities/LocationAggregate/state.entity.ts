import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';
import { CountryEntity } from './country.entity';
import { CityEntity } from './city.entity';

@Entity('states')
export class StateEntity extends BaseLocationEntity {
  @ManyToOne(() => CountryEntity, { nullable: false, eager: true })
  @JoinColumn({ name: 'country_id' })
  countryId: string;

  @OneToMany(() => CityEntity, (city) => city.stateId)
  cityid: string[];
}
