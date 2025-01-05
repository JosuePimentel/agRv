import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AccountService } from 'src/Services/AccountAggregate/account.service';
import { AccountEntity } from 'src/Entities/AccountAggregate/account.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

@Controller('account')
export class AccountController {
  constructor(private readonly service: AccountService) {}

  @Post()
  async create(@Body() entity: AccountEntity): Promise<AccountEntity> {
    return await this.service.create(entity);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() partialEntity: QueryDeepPartialEntity<AccountEntity>,
  ): Promise<void> {
    this.service.update({ id }, partialEntity);
  }

  @Get()
  async findAll(): Promise<AccountEntity[]> {
    return await this.service.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AccountEntity> {
    return await this.service.findOne({ where: { id } });
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.service.delete({ id });
  }
}
