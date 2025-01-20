import { Controller, Get, Param } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { SectionEntity } from 'src/Entities/PublicationAggregate/section.entity';
import { SectionService } from 'src/Services/PublicationAggregate/section.service';

@Controller('section')
export class SectionController extends BaseController<SectionEntity> {
  constructor(private readonly service: SectionService) {
    super(service);
  }

  @Get('by-film/:id')
  async getByFilmId(@Param('id') id: string): Promise<SectionEntity[]> {
    return await this.service.getByFilmId(id);
  }
}
