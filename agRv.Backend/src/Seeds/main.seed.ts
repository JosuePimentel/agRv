import { DataSource } from 'typeorm';
import { runSeeders, Seeder, SeederFactoryManager } from 'typeorm-extension';
import CountrySeed from './country.seed';
import StateSeed from './state.seed';
import CitySeed from './city.seed';
import UrlBaseSeed from './url-base.seed';
import GenreAccontSeed from './genre-account.seed';
import GenreFilmSeed from './genre-film.seed';
import AgeRatingSeed from './age-rating.seed';
import AccountSeed from './account.seed';

export default class MainSeed implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<void> {
    await runSeeders(dataSource, {
      seeds: [
        CountrySeed,
        StateSeed,
        CitySeed,
        UrlBaseSeed,
        GenreAccontSeed,
        GenreFilmSeed,
        AgeRatingSeed,
        AccountSeed,
      ],
    });
  }
}
