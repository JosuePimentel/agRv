import { Controller } from '@nestjs/common';
import { GenreAccountService } from 'src/Services/AccountAggregate/genre-account.service';
import { BaseController } from '../Base/base.controller';
import { GenreAccountEntity } from 'src/Entities/AccountAggregate/genre-account.entity';

@Controller('genre-account')
export class GenreAccountController extends BaseController<GenreAccountEntity> {
  constructor(private readonly service: GenreAccountService) {
    super(service);
  }
}
