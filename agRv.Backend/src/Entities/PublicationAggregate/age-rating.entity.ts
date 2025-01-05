import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { FilmEntity } from './film.entity';

@Entity('ages_rating')
export class AgeRatingEntity extends BaseEntity {
  @Column()
  age: number;

  @OneToMany(() => FilmEntity, (film) => film.ageRatingId)
  filmId: string[];
}
