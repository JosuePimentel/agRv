import { BaseEntity } from 'src/Entities/Base/base.entity';
import { FindOptionsWhere } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export interface BaseServiceInterface<TEntity extends BaseEntity> {
  create: (entity: TEntity) => Promise<TEntity>;
  delete: (findOptions: FindOptionsWhere<TEntity>) => Promise<void>;
  update: (
    findOptions: FindOptionsWhere<TEntity>,
    partialEntity: QueryDeepPartialEntity<TEntity>,
  ) => Promise<void>;
  findAll: () => Promise<TEntity[]>;
  // findOne: (findOptions: FindOptionsWhere<TEntity>) => Promise<TEntity>;
}
