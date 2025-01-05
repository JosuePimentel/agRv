import { Controller } from '@nestjs/common';
import { BaseController } from '../Base/base.controller';
import { TagPublicationEntity } from 'src/Entities/PublicationAggregate/tag-publication.entity';
import { TagPublicationService } from 'src/Services/PublicationAggregate/tag-publication.service';

@Controller('tag-publication')
export class TagPublicationController extends BaseController<TagPublicationEntity> {
  constructor(private readonly service: TagPublicationService) {
    super(service);
  }
}
