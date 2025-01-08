import { GenreFilmEntity } from '../Entities/PublicationAggregate/genre-film.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class GenreFilmSeed implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(GenreFilmEntity);

    repository.query('TRUNCATE TABLE genres_films CASCADE');

    const genreFilm = [
      { name: 'Ação' },
      { name: 'Aventura' },
      { name: 'Comédia' },
      { name: 'Drama' },
      { name: 'Terror' },
      { name: 'Suspense' },
      { name: 'Ficção Científica' },
      { name: 'Fantasia' },
      { name: 'Animação' },
      { name: 'Romance' },
      { name: 'Musical' },
      { name: 'Guerra' },
      { name: 'Policial' },
      { name: 'Faroeste' },
      { name: 'Documentário' },
      { name: 'Biografia' },
      { name: 'Histórico' },
      { name: 'Esporte' },
      { name: 'Infantil' },
      { name: 'Mistério' },
      { name: 'Comédia Romântica' },
      { name: 'Épico' },
      { name: 'Filme Noir' },
      { name: 'Super-herói' },
      { name: 'Cult' },
      { name: 'Cinema Experimental' },
      { name: 'Artes Marciais' },
      { name: 'Zumbi' },
      { name: 'Cyberpunk' },
      { name: 'Distopia' },
      { name: 'Steampunk' },
      { name: 'Catástrofe' },
      { name: 'Mitologia' },
      { name: 'Espionagem' },
      { name: 'Thriller Psicológico' },
      { name: 'Religioso' },
    ];

    for (const genre of genreFilm) {
      const g = repository.create(genre);
      await repository.save(g);
    }
  }
}
