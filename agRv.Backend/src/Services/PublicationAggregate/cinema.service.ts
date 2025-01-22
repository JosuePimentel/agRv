import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { CinemaEntity } from 'src/Entities/PublicationAggregate/cinema.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DaysOpenService } from './days-open.service';
import { CinemaDaysWeekEntity } from 'src/Entities/PublicationAggregate/cinema-days-week.entity';

@Injectable()
export class CinemaService extends BaseService<CinemaEntity> {
  constructor(
    @InjectRepository(CinemaEntity)
    private readonly repo: Repository<CinemaEntity>,

    @InjectRepository(CinemaDaysWeekEntity)
    private readonly cinemaDayRepository: Repository<CinemaDaysWeekEntity>,

    private readonly daysOpenService: DaysOpenService,
  ) {
    super(repo);
  }

  async addCinemaDay(cinemaDayWeek: CinemaDaysWeekEntity[]): Promise<void> {
    for (const cin of cinemaDayWeek) {
      const cinema = await this.findOne({ where: { id: cin.cinemaId } });
      const day = await await this.daysOpenService.findOne({
        where: { id: cin.daysOpenId },
      });

      cin.cinema = cinema;
      cin.daysOpen = day;
      await this.cinemaDayRepository.save(cin);
    }
  }

  async deleteCinemaDay(idCin: string, idDays: string[]): Promise<void> {
    for (const day of idDays) {
      await this.cinemaDayRepository.delete({
        daysOpenId: day,
        cinemaId: idCin,
      });
    }
  }

  // override async create(entity: CinemaEntity): Promise<CinemaEntity> {
  //   const daysOpen: DaysOpenEntity[] = [];

  //   for (const dayId of entity.daysOpenId) {
  //     daysOpen.push(
  //       await this.daysOpenService.findOne({ where: { id: dayId.id } }),
  //     );
  //   }

  //   entity.daysOpenId = daysOpen;

  //   console.log(entity);

  //   return entity;
  // }
}
