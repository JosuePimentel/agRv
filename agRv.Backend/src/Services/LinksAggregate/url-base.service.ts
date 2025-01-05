import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UrlBaseEntity } from 'src/Entities/LinksAggregate/urlBase.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class UrlBaseService extends BaseService<UrlBaseEntity> {
  constructor(
    @InjectRepository(UrlBaseEntity)
    private readonly repo: Repository<UrlBaseEntity>,
  ) {
    super(repo);
  }
}
