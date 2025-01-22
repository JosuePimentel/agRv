import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { CinemaEntity } from 'src/Entities/PublicationAggregate/cinema.entity';
import { CinemaService } from 'src/Services/PublicationAggregate/cinema.service';
import { BaseController } from '../Base/base.controller';
import { CinemaDaysWeekEntity } from 'src/Entities/PublicationAggregate/cinema-days-week.entity';

@Controller('cinema')
export class CinemaController extends BaseController<CinemaEntity> {
  constructor(private readonly service: CinemaService) {
    super(service);
  }

  @Post('/add-day')
  async AddDay(@Body() model: CinemaDaysWeekEntity[]): Promise<void> {
    await this.service.addCinemaDay(model);
  }

  @Delete('/remove-day/:idCin')
  async DeleteDay(
    @Param('idCin') idCin: string,
    @Body() idDays: string[],
  ): Promise<void> {
    await this.service.deleteCinemaDay(idCin, idDays);
  }
}
