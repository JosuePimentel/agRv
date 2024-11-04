import { Entity } from 'typeorm';
import { BaseSimpleEntity } from '../Base/base-simple.entity';

@Entity('genres_films')
export class GenreFilmEntity extends BaseSimpleEntity {}
