import { AccountEntity } from '../Entities/AccountAggregate/account.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class AccountSeed implements Seeder {
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const repository = dataSource.getRepository(AccountEntity);

    repository.query('TRUNCATE TABLE accounts CASCADE');

    const account = [
      {
        id: 'b928c219-1066-4532-a86d-c0e4321a6004',
        name: 'admin',
        birthDate: '2025-01-01',
        email: 'josue.farias.pimentel@gmail.com',
        CPF: '000.000.000-00',
        phone: '00000000000',
        password: 'admin',
        genreAccountId: '2a97cec9-e1e6-42ac-8aa8-7453f8b3492c',
      },
    ];

    for (const ac of account) {
      const a = repository.create(ac);
      await repository.save(a);
    }
  }
}
