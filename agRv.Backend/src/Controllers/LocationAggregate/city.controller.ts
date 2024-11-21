import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CityDto } from "src/DTO's/LocationAggregate/city.dto";
import { CityModel } from 'src/Models/LocationAggregate/city.model';
import { CityService } from 'src/Services/LocationAggregate/city.service';

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  async create(@Body() model: CityModel): Promise<CityDto> {
    return await this.cityService.create(model);
  }

  @Get()
  async findAll(): Promise<CityDto[]> {
    return await this.cityService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') _id: string): Promise<CityDto> {
    return await this.cityService.findOne(_id);
  }

  @Patch(':id')
  async update(
    @Param('id') _id: string,
    @Body() dto: Partial<CityDto>,
  ): Promise<CityDto> {
    return await this.cityService.update(_id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') _id: string): Promise<void> {
    await this.cityService.delete(_id);
  }
}
