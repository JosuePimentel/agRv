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
        id: 'abe66050-44ef-4a7b-bd5a-3f4737423d2a',
        name: 'Mulher',
      },
      {
        id: '2a97cec9-e1e6-42ac-8aa8-7453f8b3492c',
        name: 'Outro',
      },
    ];

    for (const genre of genres) {
      const g = repository.create(genre);
      await repository.save(g);
    }
  }
}
