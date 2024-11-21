import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressDto } from "src/DTO's/LocationAggregate/address.dto";
import { AddressEntity } from 'src/Entities/LocationAggregate/address.entity';
import { CityEntity } from 'src/Entities/LocationAggregate/city.entity';
import { AddressModel } from 'src/Models/LocationAggregate/address.model';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(CityEntity)
    private readonly cityRepository: Repository<CityEntity>,

    @InjectRepository(AddressEntity)
    private readonly addressRepository: Repository<AddressEntity>,
  ) {}

  async create(model: AddressModel): Promise<AddressDto> {
    const city = await this.cityRepository.findOne({
      where: { id: model.cityId },
    });
    if (!city) throw new NotFoundException();

    const addressDB = new AddressEntity();
    addressDB.CEP = model.CEP;
    addressDB.abbr = model.abbr;
    addressDB.name = model.name;
    addressDB.location = model.location;
    addressDB.complement = model.complement;
    addressDB.city = city;

    return await this.addressRepository.save(addressDB);
  }

  async findAll(): Promise<AddressDto[]> {
    return await this.addressRepository.find();
  }

  async findOne(_id: string): Promise<AddressDto> {
    const address = await this.addressRepository.findOne({
      where: { id: _id },
    });
    if (!address) throw new NotFoundException();
    return address;
  }

  async update(_id: string, dto: Partial<AddressDto>): Promise<AddressDto> {
    const address = await this.findOne(_id);
    if (!address) throw new NotFoundException();
    await this.addressRepository.update(_id, dto);
    return await this.findOne(_id);
  }

  async delete(_id: string): Promise<void> {
    const address = await this.findOne(_id);
    if (!address) throw new NotFoundException();
    this.addressRepository.delete(_id);
  }
}
