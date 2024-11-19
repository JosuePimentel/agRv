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
import { UrlBaseDto } from "src/DTO's/LinksAggregate/urlBase.dto";
import { UrlBaseModel } from 'src/Models/LinksAggregate/url-base.model';
import { UrlBaseService } from 'src/Services/LinksAggregate/url-base.service';

@Controller('url-base')
export class UrlBaseController {
  constructor(private readonly urlBaseService: UrlBaseService) {}

  @Post()
  async create(@Body() model: UrlBaseModel): Promise<UrlBaseDto> {
    return await this.urlBaseService.create(model);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<UrlBaseDto> {
    return await this.urlBaseService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.urlBaseService.delete(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() model: Partial<UrlBaseDto>,
  ): Promise<UrlBaseDto> {
    return await this.urlBaseService.update(id, model);
  }
}
