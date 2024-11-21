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
import { CountryDto } from "src/DTO's/LocationAggregate/country.dto";
import { CountryModel } from 'src/Models/LocationAggregate/country.model';
import { CountryService } from 'src/Services/LocationAggregate/country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  async create(@Body() model: CountryModel): Promise<CountryDto> {
    return await this.countryService.create(model);
  }

  @Get()
  async findAll(): Promise<CountryDto[]> {
    return await this.countryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') _id: string) {
    return await this.countryService.findOne(_id);
  }

  @Patch(':id')
  async update(
    @Param('id') _id: string,
    @Body() dto: Partial<CountryDto>,
  ): Promise<CountryDto> {
    return this.countryService.update(_id, dto);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') _id: string): Promise<void> {
    await this.countryService.delete(_id);
  }
}
