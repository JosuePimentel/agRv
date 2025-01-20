import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { GenreFilmEntity } from './genre-film.entity';
import { PersonEntity } from './person.entity';
import { AgeRatingEntity } from './age-rating.entity';
import { ProductionCompanyEntity } from './production-company.entity';

@Entity('films')
export class FilmEntity extends BaseEntity {
  @Column()
  video: string;

  @Column({ type: 'timestamptz', name: 'date_debut' })
  dateDebut: Date;

  @Column()
  duration: number;

  @ManyToMany(() => GenreFilmEntity, { nullable: false, eager: true })
  @JoinTable({
    name: 'film_genre_film',
    joinColumn: { name: 'film_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'genre_film_id', referencedColumnName: 'id' },
  })
  genreFilmId: string[];

  @ManyToMany(() => PersonEntity, { nullable: false, eager: true })
  @JoinTable({
    name: 'elenco_film_person',
    joinColumn: { name: 'film_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'person_id', referencedColumnName: 'id' },
  })
  castId: string[];

  @ManyToOne(() => PersonEntity, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'direction_person_id' })
  directionPersonId: string;

  @ManyToOne(() => AgeRatingEntity, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'age_rating_id' })
  ageRatingId: string;

  @ManyToMany(() => ProductionCompanyEntity, { eager: true, nullable: false })
  @JoinTable({
    name: 'film_production_company',
    joinColumn: {
      name: 'film_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'production_company_id',
      referencedColumnName: 'id',
    },
  })
  productionCompanyId: string[];
}
