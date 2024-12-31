import {
  Body,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BaseEntity } from 'src/Entities/Base/base.entity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseController<TEntity extends BaseEntity> {
  constructor(protected readonly s: any) {}

  @Post()
  async create(@Body() entity: TEntity): Promise<TEntity> {
    return await this.s.create(entity);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() partialEntity: QueryDeepPartialEntity<TEntity>,
  ): Promise<void> {
    this.s.update({ id }, partialEntity);
  }

  @Get()
  async findAll(): Promise<TEntity[]> {
    return await this.s.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.s.findOne({ where: { id } });
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.s.delete({ id });
  }
}
