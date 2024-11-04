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
  genreFilm: GenreFilmEntity[];

  @ManyToMany(() => PersonEntity)
  @JoinTable({
    name: 'elenco_film_person',
    joinColumn: { name: 'film_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'person_id', referencedColumnName: 'id' },
  })
  person: PersonEntity[];

  @ManyToOne(() => PersonEntity, (person) => person.film)
  @JoinColumn({ name: 'direction_person_id' })
  directionPerson: PersonEntity;

  @OneToMany(() => SectionEntity, (section) => section.film)
  section: SectionEntity[];

  @ManyToOne(() => AgeRatingEntity, (ageRating) => ageRating.film)
  @JoinColumn({ name: 'age_rating_id' })
  ageRating: AgeRatingEntity;

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
  productionCompany: ProductionCompanyEntity[];
}
