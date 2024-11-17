import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

export abstract class BaseService<TModel, TDto> {
  TEntity;

  constructor(
    @InjectRepository(this.TEntity)
    private readonly repository: Repository<this.TEntity>,
  ) {}

  setEntity(entity: any) {
    this.TEntity = entity;
  }

  // Método POST - Criação
  async create(model: TModel): Promise<TDto> {
    const entity = new TEntity();
    // const entity = this.dtoToEntity(model);
    return await this.repository.save(entity);
  }

  // Método GET - Listar todos
  async findAll(): Promise<TDto[]> {
    return await this.repository.find();
  }

  // Método GET - Buscar por ID
  async findOne(id: string): Promise<TDto> {
    return await this.repository.findOne({ where: { id } });
  }

  // Método PUT - Atualização
  async update(id: string, dto: TDto): Promise<TModel> {
    const entity = await this.findOne(id);
    if (!entity) {
      throw new Error('Entity not found');
    }
    const updatedEntity = this.dtoToEntity(dto, entity);
    return await this.repository.save(updatedEntity);
  }

  // Método DELETE - Remover
  async remove(id: string): Promise<void> {
    const entity = await this.findOne(id);
    if (!entity) {
      throw new Error('Entity not found');
    }
    await this.repository.remove(entity);
  }

  // Método para converter DTO para entidade
  protected abstract dtoToEntity(dto: TDto, TModel?: TModel): TModel;
}
