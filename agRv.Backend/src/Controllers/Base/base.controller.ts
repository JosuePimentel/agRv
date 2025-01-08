import {
  Body,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BaseEntity } from 'src/Entities/Base/base.entity';
import { AuthGuard } from 'src/Modules/AccountAggregate/auth/auth.guard';
import { BaseService } from 'src/Services/Base/base.service';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

// @UseGuards(AuthGuard)
export abstract class BaseController<T extends BaseEntity> {
  constructor(protected readonly s: BaseService<any>) {}

  @Post()
  async create(@Body() entity: T): Promise<T> {
    return await this.s.create(entity);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<void> {
    this.s.update({ id }, partialEntity);
  }

  @Get()
  async findAll(): Promise<T[]> {
    return await this.s.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<T> {
    return await this.s.findOne({ where: { id } });
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.s.delete({ id });
  }
}
