import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityDto } from "src/DTO's/LocationAggregate/city.dto";
import { CityEntity } from 'src/Entities/LocationAggregate/city.entity';
import { StateEntity } from 'src/Entities/LocationAggregate/state.entity';
import { CityModel } from 'src/Models/LocationAggregate/city.model';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityService: Repository<CityEntity>,

    @InjectRepository(StateEntity)
    private readonly stateService: Repository<StateEntity>,
  ) {}

  async create(model: CityModel): Promise<CityDto> {
    const state = await this.stateService.findOne({
      where: { id: model.stateId },
    });
    if (!state) throw new NotFoundException();

    const cityDB = new CityEntity();
    cityDB.CEP = model.CEP;
    cityDB.abbr = model.abbr;
    cityDB.name = model.name;
    cityDB.location = model.location;
    cityDB.state = state;

    return await this.cityService.save(cityDB);
  }

  async findAll(): Promise<CityDto[]> {
    return await this.cityService.find();
  }

  async findOne(_id: string): Promise<CityDto> {
    const city = await this.cityService.findOne({ where: { id: _id } });
    if (!city) throw new NotFoundException();
    return city;
  }

  async update(_id: string, dto: Partial<CityDto>): Promise<CityDto> {
    const city = await this.findOne(_id);
    if (!city) throw new NotFoundException();
    await this.cityService.update(_id, dto);
    return await this.findOne(_id);
  }

  async delete(_id: string): Promise<void> {
    const city = await this.findOne(_id);
    if (!city) throw new NotFoundException();
    this.cityService.delete(_id);
  }
}
