import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GenreAccountDto } from "src/DTO's/AccountAggregate/genre-account.dto";
import { GenreAccountModel } from 'src/Models/AccountAggregate/genre-account.model';
import { AuthGuard } from 'src/Modules/account-aggregate/auth/auth.guard';
import { GenreAccountService } from 'src/Services/AccountAggregate/genre-account.service';

@UseGuards(AuthGuard)
@Controller('genre-account')
export class GenreAccountController {
  constructor(private readonly genreAccountService: GenreAccountService) {}

  @Post()
  async create(@Body() model: GenreAccountModel): Promise<GenreAccountDto> {
    return await this.genreAccountService.create(model);
  }

  @Get()
  async findAll(): Promise<GenreAccountDto[]> {
    return await this.genreAccountService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<GenreAccountDto> {
    return await this.genreAccountService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(204)
  async delete(@Param('id') id: string): Promise<void> {
    await this.genreAccountService.delete(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() model: Partial<GenreAccountDto>,
  ): Promise<GenreAccountDto> {
    return await this.genreAccountService.update(id, model);
  }
}
