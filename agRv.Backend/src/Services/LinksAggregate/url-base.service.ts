import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlBaseDto } from "src/DTO's/LinksAggregate/urlBase.dto";
import { UrlBaseEntity } from 'src/Entities/LinksAggregate/urlBase.entity';
import { UrlBaseModel } from 'src/Models/LinksAggregate/url-base.model';
import { Repository } from 'typeorm';

@Injectable()
export class UrlBaseService {
  constructor(
    @InjectRepository(UrlBaseEntity)
    private readonly urlBaseRepository: Repository<UrlBaseEntity>,
  ) {}

  async create(model: UrlBaseModel): Promise<UrlBaseDto> {
    const urlBaseDB = new UrlBaseEntity();
    urlBaseDB.name = model.name;
    urlBaseDB.icon = model.icon;
    urlBaseDB.url = model.url;

    const genreAccount: UrlBaseDto =
      await this.urlBaseRepository.save(urlBaseDB);

    return genreAccount;
  }

  async findOne(_id: string): Promise<UrlBaseDto> {
    const urlBase = await this.urlBaseRepository.findOne({
      where: { id: _id },
    });

    if (!urlBase) {
      throw new NotFoundException(`Genre account with ID "${_id}" not found`);
    }

    return urlBase;
  }

  async delete(_id: string): Promise<void> {
    const urlBase = await this.findOne(_id);

    if (!urlBase) {
      throw new NotFoundException(`Genre account with ID "${_id}" not found`);
    }

    this.urlBaseRepository.delete(_id);
  }

  async update(_id: string, model: Partial<UrlBaseDto>) {
    const urlBase = await this.findOne(_id);

    if (!urlBase) {
      throw new NotFoundException(`Genre account with ID "${_id}" not found`);
    }

    await this.urlBaseRepository.update(_id, model);

    return await this.findOne(_id);
  }
}
