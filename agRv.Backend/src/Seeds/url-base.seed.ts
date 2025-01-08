import { UrlBaseEntity } from '../Entities/LinksAggregate/urlBase.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class UrlBaseSeed implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(UrlBaseEntity);

    repository.query('TRUNCATE TABLE url_base CASCADE');

    const urlsBase = [
      {
        url: 'https://www.youtube.com/@',
        name: 'Youtube',
      },
      {
        url: 'https://github.com/',
        name: 'GitHub',
      },
      {
        url: 'https://www.instagram.com/',
        name: 'Instagram',
      },
      {
        url: 'https://x.com/',
        name: 'Twitter',
      },
      {
        url: 'https://wa.me/',
        name: 'WhatsApp',
      }
    ];

    for (const url of urlsBase) {
      const u = repository.create(url);
      await repository.save(u);
    }
  }
}
