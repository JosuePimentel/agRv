import { Controller } from '@nestjs/common';
import { AccountService } from 'src/Services/AccountAggregate/account.service';
import { BaseController } from '../Base/base.controller';
import { AccountEntity } from 'src/Entities/AccountAggregate/account.entity';

@Controller('account')
export class AccountController extends BaseController<AccountEntity> {
  constructor(private readonly service: AccountService) {
    super(service);
  }
}
