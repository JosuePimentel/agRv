import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DaysOpenDto } from "src/DTO's/PublicationAggregate/days-open.dto";
import { DaysOpenEntity } from 'src/Entities/PublicationAggregate/days-open.entity';
import { DaysOpenModel } from 'src/Models/PublicationAggregate/days-open.model';
import { Repository } from 'typeorm';

@Injectable()
export class DaysOpenService {
  constructor(
    @InjectRepository(DaysOpenEntity)
    private readonly daysOpenRepository: Repository<DaysOpenEntity>,
  ) {}

  async create(model: DaysOpenModel): Promise<DaysOpenDto> {
    const dayDB = new DaysOpenEntity();
    dayDB.dayOfWeek = model.dayOfWeek;
    dayDB.beginTime = model.beginTime;
    dayDB.endTime = model.endTime;

    return await this.daysOpenRepository.save(dayDB);
  }

  async findAll(): Promise<DaysOpenDto[]> {
    return await this.daysOpenRepository.find();
  }

  async update(_id: string, dto: Partial<DaysOpenDto>): Promise<DaysOpenDto> {
    if (!(await this.daysOpenRepository.findOne({ where: { id: _id } })))
      throw new NotFoundException();

    this.daysOpenRepository.update(_id, dto);

    return await this.daysOpenRepository.findOne({ where: { id: _id } });
  }

  async delete(_id: string): Promise<void> {
    if (!(await this.daysOpenRepository.findOne({ where: { id: _id } })))
      throw new NotFoundException();

    this.daysOpenRepository.delete(_id);
  }
}
