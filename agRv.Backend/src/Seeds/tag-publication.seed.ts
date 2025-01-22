import { TagPublicationEntity } from 'src/Entities/PublicationAggregate/tag-publication.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export class TagPublicationSeed implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(TagPublicationEntity);

    repository.query('TRUNCATE TABLE tags_publications CASCADE');

    const tags = [
      {
        id: 'azaz',
        name: 'Restaurantes',
      },
    ];

    for (const tag of tags) {
      const t = repository.create(tag);
      await repository.save(t);
    }
  }
}
