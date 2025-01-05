import { Controller } from '@nestjs/common';
import { LinkPublicationService } from '../../Services/LinksAggregate/link-publication.service';
import { BaseController } from '../Base/base.controller';
import { LinkPublicationEntity } from 'src/Entities/LinksAggregate/linkPublication.entity';

@Controller('link-publication')
export class LinkPublicationController extends BaseController<LinkPublicationEntity> {
  constructor(private readonly service: LinkPublicationService) {
    super(service);
  }
}
