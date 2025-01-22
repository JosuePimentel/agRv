import { AgeRatingEntity } from '../Entities/PublicationAggregate/age-rating.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class AgeRatingSeed implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(AgeRatingEntity);

    repository.query('TRUNCATE TABLE ages_rating CASCADE');

    const agesRating = [
      {
        id: 'f52ff2a9-2e38-4fc8-87c3-21abfe51c41f',
        age: 0,
      },
      {
        age: 10,
      },
      {
        age: 12,
      },
      {
        age: 14,
      },
      {
        age: 16,
      },
      {
        age: 18,
      },
    ];

    for (const age of agesRating) {
      const a = repository.create(age);
      await repository.save(a);
    }
  }
}
