import { Body, Controller, Get, Post } from '@nestjs/common';
import { GenreAccountDto } from "src/DTO's/AccountAggregate/genre-account.dto";
import { GenreAccountModel } from 'src/Models/AccountAggregate/genre-account.model';
import { GenreAccountService } from 'src/Services/accountAggregate/genre-account.service';

@Controller('genre-account')
export class GenreAccountController {
  constructor(private readonly genreAccountService: GenreAccountService) {}

  @Post()
  async create(@Body() bank: GenreAccountModel): Promise<GenreAccountDto> {
    return await this.genreAccountService.create(bank);
  }

  @Get()
  async findAll(): Promise<GenreAccountDto[]> {
    return await this.genreAccountService.findAll();
  }
}
