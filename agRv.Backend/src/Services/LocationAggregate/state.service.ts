import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateEntity } from 'src/Entities/LocationAggregate/state.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class StateService extends BaseService<StateEntity> {
  constructor(
    @InjectRepository(StateEntity)
    private readonly repo: Repository<StateEntity>,
  ) {
    super(repo);
  }

  // async create(model: StateModel): Promise<StateDto> {
  //   const country = await this.countryRepository.findOne({
  //     where: { id: model.countryId },
  //   });
  //   if (!country) throw new NotFoundException();

  //   const stateDB = new StateEntity();
  //   stateDB.name = model.name;
  //   stateDB.abbr = model.abbr;
  //   stateDB.location = model.location;
  //   stateDB.country = country;

  //   const state: StateDto = await this.stateRepository.save(stateDB);
  //   return state;
  // }

  // async findAll(): Promise<StateDto[]> {
  //   return await this.stateRepository.find();
  // }

  // async findOne(_id: string): Promise<StateDto> {
  //   return await this.stateRepository.findOne({
  //     where: { id: _id },
  //   });
  // }

  // async update(_id: string, dto: Partial<StateDto>): Promise<StateDto> {
  //   const state = await this.findOne(_id);
  //   if (!state) throw new NotFoundException();
  //   await this.stateRepository.update(_id, dto);
  //   return await this.findOne(_id);
  // }

  // async delete(_id: string): Promise<void> {
  //   const state = await this.findOne(_id);
  //   if (!state) throw new NotFoundException();
  //   await this.stateRepository.delete(_id);
  // }
}
