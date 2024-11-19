import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LinkPublicationService } from '../../Services/LinksAggregate/link-publication.service';
import { LinkPublicationModel } from 'src/Models/LinksAggregate/link-publication.model';
import { LinkPublicationDto } from "src/DTO's/LinksAggregate/linkPublication.dto";

@Controller('link-publication')
export class LinkPublicationController {
  constructor(
    private readonly LinkPublicationService: LinkPublicationService,
  ) {}

  @Post()
  async create(
    @Body() model: LinkPublicationModel,
  ): Promise<LinkPublicationDto> {
    return await this.LinkPublicationService.create(model);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<LinkPublicationDto> {
    return await this.LinkPublicationService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.LinkPublicationService.delete(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() model: Partial<LinkPublicationDto>,
  ): Promise<LinkPublicationDto> {
    return await this.LinkPublicationService.update(id, model);
  }
}
