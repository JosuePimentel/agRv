import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';
import { CountryEntity } from './country.entity';
import { CityEntity } from './city.entity';

@Entity('states')
export class StateEntity extends BaseLocationEntity {
  @ManyToOne(() => CountryEntity, (Country) => Country.state, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;

  @OneToMany(() => CityEntity, (city) => city.state)
  city: CityEntity[];

  // @ManyToOne(() => CityEntity, (city) => city.capitalOfState)
  // @JoinColumn({ name: 'capital_city_id' })
  // capitalCity: CityEntity;
}
