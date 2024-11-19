import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkAccountDto } from "src/DTO's/LinksAggregate/linkAccount.dto";
import { LinkAccountEntity } from 'src/Entities/LinksAggregate/linkAccount.entity';
import { UrlBaseEntity } from 'src/Entities/LinksAggregate/urlBase.entity';
import { LinkAccountModel } from 'src/Models/LinksAggregate/link-account.model';
import { Repository } from 'typeorm';

@Injectable()
export class LinkAccountService {
  constructor(
    @InjectRepository(LinkAccountEntity)
    private readonly linkPublicationRepository: Repository<LinkAccountEntity>,
    @InjectRepository(UrlBaseEntity)
    private readonly urlBaseRepository: Repository<UrlBaseEntity>,
  ) {}

  async create(model: LinkAccountModel): Promise<LinkAccountDto> {
    const urlBase = await this.urlBaseRepository.findOne({
      where: { id: model.urlBaseId },
    });

    if (!urlBase) {
      throw new NotFoundException(
        `Url Base with ID "${model.urlBaseId}" not found.`,
      );
    }

    const linkPublicationDB = new LinkAccountEntity();
    linkPublicationDB.link = model.link;
    linkPublicationDB.urlBase = urlBase;

    const linkPublication: LinkAccountDto =
      await this.linkPublicationRepository.save(linkPublicationDB);

    return linkPublication;
  }

  async findOne(_id: string): Promise<LinkAccountDto> {
    const linkPublication = await this.linkPublicationRepository.findOne({
      where: { id: _id },
      relations: { urlBase: true },
    });

    if (!linkPublication) {
      throw new NotFoundException(`Genre account with ID "${_id}" not found`);
    }

    return linkPublication;
  }

  async delete(_id: string): Promise<void> {
    const linkPublication = await this.findOne(_id);

    if (!linkPublication) {
      throw new NotFoundException(`Genre account with ID "${_id}" not found`);
    }

    this.linkPublicationRepository.delete(_id);
  }

  async update(_id: string, model: Partial<LinkAccountDto>) {
    const linkPublication = await this.findOne(_id);

    if (!linkPublication) {
      throw new NotFoundException(`Genre account with ID "${_id}" not found`);
    }

    await this.linkPublicationRepository.update(_id, model);

    return await this.findOne(_id);
  }
}
