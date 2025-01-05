import { Injectable } from '@nestjs/common';
import { BaseService } from '../Base/base.service';
import { TagSectionsEntity } from 'src/Entities/PublicationAggregate/tag-section.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TagSectionService extends BaseService<TagSectionsEntity> {
  constructor(
    @InjectRepository(TagSectionsEntity)
    private readonly repo: Repository<TagSectionsEntity>,
  ) {
    super(repo);
  }
}
