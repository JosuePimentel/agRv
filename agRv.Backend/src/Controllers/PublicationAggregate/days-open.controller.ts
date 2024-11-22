import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { DaysOpenDto } from "src/DTO's/PublicationAggregate/days-open.dto";
import { DaysOpenModel } from 'src/Models/PublicationAggregate/days-open.model';
import { DaysOpenService } from 'src/Services/PublicationAggregate/days-open.service';

@Controller('days-open')
export class DaysOpenController {
  constructor(private readonly daysOpenService: DaysOpenService) {}

  @Post()
  async create(@Body() model: DaysOpenModel): Promise<DaysOpenDto> {
    return await this.daysOpenService.create(model);
  }

  @Get()
  async findAll(): Promise<DaysOpenDto[]> {
    return await this.daysOpenService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') _id: string, @Body() dto: Partial<DaysOpenDto>) {
    return await this.daysOpenService.update(_id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') _id: string): Promise<void> {
    await this.daysOpenService.delete(_id);
  }
}
