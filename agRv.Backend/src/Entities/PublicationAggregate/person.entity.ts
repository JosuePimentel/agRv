import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { FilmEntity } from './film.entity';
import { CountryEntity } from '../LocationAggregate/country.entity';

@Entity('people')
export class PersonEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'artistic_name', nullable: true })
  artisticName: string;

  @Column({ type: 'date', name: 'birth_date', nullable: true })
  birthDate: Date;

  @OneToMany(() => FilmEntity, (film) => film.directionPersonId)
  filmId: string;

  @ManyToOne(() => CountryEntity, {
    nullable: false,
  })
  @JoinColumn({ name: 'country_id' })
  countryId: string;
}
