import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';
import { AccountDto } from "src/DTO's/AccountAggregate/account.dto";
import { AccountEntity } from 'src/Entities/AccountAggregate/account.entity';
import { GenreAccountEntity } from 'src/Entities/AccountAggregate/genre-account.entity';
import { AddressEntity } from 'src/Entities/LocationAggregate/address.entity';
import { AccountModel } from 'src/Models/AccountAggregate/account.model';
import { LoginModel } from 'src/Models/AccountAggregate/auth/Login.model';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>,

    @InjectRepository(GenreAccountEntity)
    private readonly genreAccountRepository: Repository<GenreAccountEntity>,

    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async create(model: AccountModel): Promise<AccountDto> {
    const accountDB = new AccountEntity();
    accountDB.name = model.name;
    accountDB.birthDate = model.birthDate;
    accountDB.password = hashSync(model.password, 11);
    accountDB.email = model.email;

    const genreAccount = await this.genreAccountRepository.findOne({
      where: { id: model.genreAccountId },
    });
    if (!genreAccount) {
      throw new NotFoundException(
        `Genre account with ID "${model.genreAccountId}" not found`,
      );
    }

    // Voltar depois
    // const address = await this.addressRepository.findOne({
    //   where: { id: model.addressId },
    // });
    // if (!address) {
    //   throw new NotFoundException(
    //     `Address with ID "${model.addressId}" not found`,
    //   );
    // }
    // accountDB.address = address;

    accountDB.genreAccount = genreAccount;

    const account: AccountDto = await this.accountRepository.save(accountDB);

    return account;
  }

  async findByEmail(model: LoginModel): Promise<AccountDto> {
    return await this.accountRepository.findOne({
      where: { email: model.email },
    });
  }
}
