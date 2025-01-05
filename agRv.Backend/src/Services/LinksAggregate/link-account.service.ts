import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkAccountEntity } from 'src/Entities/LinksAggregate/linkAccount.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../Base/base.service';

@Injectable()
export class LinkAccountService extends BaseService<LinkAccountEntity> {
  constructor(
    @InjectRepository(LinkAccountEntity)
    private readonly repo: Repository<LinkAccountEntity>,
  ) {
    super(repo);
  }
}
