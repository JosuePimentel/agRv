import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryDto } from "src/DTO's/LocationAggregate/country.dto";
import { CountryEntity } from 'src/Entities/LocationAggregate/country.entity';
import { CountryModel } from 'src/Models/LocationAggregate/country.model';
import { Repository } from 'typeorm';

@Injectable()
export class CountryService {
  constructor(
    @InjectRepository(CountryEntity)
    private readonly countryRepository: Repository<CountryEntity>,
  ) {}

  async create(model: CountryModel): Promise<CountryDto> {
    const countryDB = new CountryEntity();
    countryDB.name = model.name;
    countryDB.location = model.location;
    countryDB.abbr = model.abbr;

    const country = await this.countryRepository.save(countryDB);

    return country;
  }

  async findAll(): Promise<CountryDto[]> {
    return await this.countryRepository.find();
  }

  async findOne(_id: string): Promise<CountryDto> {
    const country: CountryDto = await this.countryRepository.findOne({
      where: { id: _id },
    });
    if (!country) throw new NotFoundException();
    return country;
  }

  async update(_id: string, model: Partial<CountryDto>): Promise<CountryDto> {
    const country = await this.findOne(_id);
    if (!country) new NotFoundException();
    await this.countryRepository.update(_id, model);
    return await this.findOne(_id);
  }

  async delete(_id: string): Promise<void> {
    const country = await this.findOne(_id);
    if (!country) throw new NotFoundException();
    this.countryRepository.delete(_id);
  }
}
