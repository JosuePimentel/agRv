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
import { LinkAccountDto } from "src/DTO's/LinksAggregate/linkAccount.dto";
import { LinkAccountModel } from 'src/Models/LinksAggregate/link-account.model';
import { LinkAccountService } from 'src/Services/LinksAggregate/link-account.service';

@Controller('link-account')
export class LinkAccountController {
  constructor(private readonly linkAccountService: LinkAccountService) {}

  @Post()
  async create(@Body() model: LinkAccountModel): Promise<LinkAccountDto> {
    return await this.linkAccountService.create(model);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<LinkAccountDto> {
    return await this.linkAccountService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.linkAccountService.delete(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() model: Partial<LinkAccountDto>,
  ): Promise<LinkAccountDto> {
    return await this.linkAccountService.update(id, model);
  }
}
