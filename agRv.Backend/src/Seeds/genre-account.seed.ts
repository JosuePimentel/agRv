import { GenreAccountEntity } from '../Entities/AccountAggregate/genre-account.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class GenreAccontSeed implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(GenreAccountEntity);

    repository.query('TRUNCATE TABLE genres_accounts CASCADE');

    const genres = [
      {
        id: '80d6cf58-2de1-430c-b0ed-9ee7181686a7',
        name: 'Homem',
      },
      {
        name: 'Mulher',
      },
      {
        name: 'Outro',
      },
    ];

    for (const genre of genres) {
      const g = repository.create(genre);
      await repository.save(g);
    }
  }
}
