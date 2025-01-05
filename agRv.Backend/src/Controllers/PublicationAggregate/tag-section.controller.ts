import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { TagSectionsEntity } from 'src/Entities/PublicationAggregate/tag-section.entity';
import { TagSectionService } from 'src/Services/PublicationAggregate/tag-section.service';

@Controller('tag-section')
export class TagSectionController extends BaseController<TagSectionsEntity> {
  constructor(private readonly service: TagSectionService) {
    super(service);
  }
}
