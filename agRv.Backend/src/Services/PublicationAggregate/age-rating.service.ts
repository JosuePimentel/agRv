import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AgeRatingDto } from "src/DTO's/PublicationAggregate/age-rating.dto";
import { AgeRatingEntity } from 'src/Entities/PublicationAggregate/age-rating.entity';
import { AgeRatingModel } from 'src/Models/PublicationAggregate/age-rating.model';
import { Repository } from 'typeorm';

@Injectable()
export class AgeRatingService {
  constructor(
    @InjectRepository(AgeRatingEntity)
    private readonly ageRatingRepository: Repository<AgeRatingEntity>,
  ) {}

  async create(model: AgeRatingModel): Promise<AgeRatingDto> {
    const ageRatingDB = new AgeRatingEntity();
    ageRatingDB.age = model.age;

    return await this.ageRatingRepository.save(ageRatingDB);
  }

  async findAll(): Promise<AgeRatingDto[]> {
    return await this.ageRatingRepository.find();
  }

  async update(_id: string, dto: Partial<AgeRatingDto>): Promise<AgeRatingDto> {
    if (!(await this.ageRatingRepository.findOne({ where: { id: _id } })))
      throw new NotFoundException();

    this.ageRatingRepository.update(_id, dto);

    return await this.ageRatingRepository.findOne({ where: { id: _id } });
  }

  async delete(_id: string): Promise<void> {
    if (!(await this.ageRatingRepository.findOne({ where: { id: _id } })))
      throw new NotFoundException();
    await this.ageRatingRepository.delete(_id);
  }
}
