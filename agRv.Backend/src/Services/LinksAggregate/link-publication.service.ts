import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkPublicationDto } from "src/DTO's/LinksAggregate/linkPublication.dto";
import { LinkPublicationEntity } from 'src/Entities/LinksAggregate/linkPublication.entity';
import { UrlBaseEntity } from 'src/Entities/LinksAggregate/urlBase.entity';
import { LinkPublicationModel } from 'src/Models/LinksAggregate/link-publication.model';
import { Repository } from 'typeorm';

@Injectable()
export class LinkPublicationService {
  constructor(
    @InjectRepository(LinkPublicationEntity)
    private readonly linkPublicationRepository: Repository<LinkPublicationEntity>,
    @InjectRepository(UrlBaseEntity)
    private readonly urlBaseRepository: Repository<UrlBaseEntity>,
  ) {}

  async create(model: LinkPublicationModel): Promise<LinkPublicationDto> {
    const urlBase = await this.urlBaseRepository.findOne({
      where: { id: model.urlBaseId },
    });

    if (!urlBase) {
      throw new NotFoundException(
        `Url Base with ID "${model.urlBaseId}" not found.`,
      );
    }

    const linkPublicationDB = new LinkPublicationEntity();
    linkPublicationDB.link = model.link;
    linkPublicationDB.urlBase = urlBase;

    const linkPublication: LinkPublicationDto =
      await this.linkPublicationRepository.save(linkPublicationDB);

    return linkPublication;
  }

  // async findAll(): Promise<LinkPublicationDto[]> {
  //   return (
  //     (await this.linkPublicationRepository.find()) ?? []
  //   );
  // }

  async findOne(_id: string): Promise<LinkPublicationDto> {
    const linkPublication = await this.linkPublicationRepository.findOne({
      where: { id: _id },
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

  async update(_id: string, model: Partial<LinkPublicationDto>) {
    const linkPublication = await this.findOne(_id);

    if (!linkPublication) {
      throw new NotFoundException(`Genre account with ID "${_id}" not found`);
    }

    await this.linkPublicationRepository.update(_id, model);

    return await this.findOne(_id);
  }
}
