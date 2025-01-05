import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { GenreFilmEntity } from './genre-film.entity';
import { PersonEntity } from './person.entity';
import { SectionEntity } from './section.entity';
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

  @ManyToMany(() => GenreFilmEntity)
  @JoinTable({
    name: 'film_genre_film',
    joinColumn: { name: 'film_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'genre_film_id', referencedColumnName: 'id' },
  })
  genreFilmId: string[];

  @ManyToMany(() => PersonEntity)
  @JoinTable({
    name: 'elenco_film_person',
    joinColumn: { name: 'film_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'person_id', referencedColumnName: 'id' },
  })
  castId: string[];

  @ManyToOne(() => PersonEntity, (person) => person.filmId, {
    nullable: false,
  })
  @JoinColumn({ name: 'direction_person_id' })
  directionPersonId: string;

  @OneToMany(() => SectionEntity, (section) => section.filmId)
  sectionId: string[];

  @ManyToOne(() => AgeRatingEntity, (ageRating) => ageRating.filmId, {
    nullable: false,
  })
  @JoinColumn({ name: 'age_rating_id' })
  ageRatingId: string;

  @ManyToMany(() => ProductionCompanyEntity)
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
