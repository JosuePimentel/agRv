import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AgeRatingDto } from "src/DTO's/PublicationAggregate/age-rating.dto";
import { AgeRatingModel } from 'src/Models/PublicationAggregate/age-rating.model';
import { AgeRatingService } from 'src/Services/PublicationAggregate/age-rating.service';

@Controller('age-rating')
export class AgeRatingController {
  constructor(private readonly ageRatingService: AgeRatingService) {}

  @Post()
  async create(@Body() model: AgeRatingModel): Promise<AgeRatingDto> {
    return await this.ageRatingService.create(model);
  }

  @Get()
  async findAll(): Promise<AgeRatingDto[]> {
    return await this.ageRatingService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') _id: string,
    @Body() dto: Partial<AgeRatingDto>,
  ): Promise<AgeRatingDto> {
    return await this.ageRatingService.update(_id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') _id: string): Promise<void> {
    return await this.ageRatingService.delete(_id);
  }
}
