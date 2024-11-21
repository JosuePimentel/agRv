import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { StateDto } from "src/DTO's/LocationAggregate/state.dto";
import { StateModel } from 'src/Models/LocationAggregate/state.model';
import { StateService } from 'src/Services/LocationAggregate/state.service';

@Controller('state')
export class StateController {
  constructor(private readonly stateService: StateService) {}

  @Post()
  async create(@Body() model: StateModel): Promise<StateDto> {
    return await this.stateService.create(model);
  }

  @Get()
  async findAll(): Promise<StateDto[]> {
    return await this.stateService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') _id: string) {
    return await this.stateService.findOne(_id);
  }

  @Patch(':id')
  async update(
    @Param('id') _id: string,
    @Body() dto: Partial<StateDto>,
  ): Promise<StateDto> {
    return this.stateService.update(_id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    await this.stateService.delete(_id);
  }
}
