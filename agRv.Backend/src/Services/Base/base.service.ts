import { NotFoundException } from '@nestjs/common';
import { BaseEntity } from 'src/Entities/Base/base.entity';
import { FindOneOptions, FindOptionsWhere, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseService<T extends BaseEntity> {
  constructor(protected readonly repository: Repository<T>) {}

  async create(entity: T): Promise<T> {
    return await this.repository.save(entity);
  }

  async delete(findOptions: FindOptionsWhere<T>): Promise<void> {
    const entityExist = await this.repository.findOne({ where: findOptions });
    if (!entityExist) throw new NotFoundException(`Id não encontado`);
    await this.repository.delete(findOptions);
  }

  async update(
    findOptions: FindOptionsWhere<T>,
    partialEntity: QueryDeepPartialEntity<T>,
  ): Promise<void> {
    const entityExist = await this.repository.findOne({ where: findOptions });
    if (!entityExist) throw new NotFoundException(`Id não encontado`);
    await this.repository.update(findOptions, partialEntity);
  }

  async findAll(): Promise<T[]> {
    return await this.repository.find();
  }

  async findOne(findOptions: FindOneOptions<T>): Promise<T> {
    try {
      return await this.repository.findOneOrFail(findOptions);
    } catch {
      throw new NotFoundException(`Id não encontrado.`);
    }
  }
}
