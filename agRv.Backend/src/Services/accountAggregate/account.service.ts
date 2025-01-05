import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hashSync } from 'bcrypt';
import { AccountEntity } from 'src/Entities/AccountAggregate/account.entity';
import { LoginModel } from 'src/Models/AccountAggregate/auth/Login.model';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class AccountService extends BaseService<AccountEntity> {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly repo: Repository<AccountEntity>,
  ) {
    super(repo);
  }

  override async create(entity: AccountEntity): Promise<AccountEntity> {
    entity.password = hashSync(entity.password, 11);
    return await this.repo.save(entity);
  }

  async findByEmail(model: LoginModel): Promise<AccountEntity> {
    return await this.repo.findOne({
      where: { email: model.email },
    });
  }
}
