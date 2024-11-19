import { Body, Controller, Post } from '@nestjs/common';
import { AccountDto } from "src/DTO's/AccountAggregate/account.dto";
import { AccountModel } from 'src/Models/AccountAggregate/account.model';
import { AccountService } from 'src/Services/AccountAggregate/account.service';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  async create(@Body() model: AccountModel): Promise<AccountDto> {
    return await this.accountService.create(model);
  }
}
