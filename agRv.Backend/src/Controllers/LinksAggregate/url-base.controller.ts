import { Controller } from '@nestjs/common';
import { UrlBaseService } from 'src/Services/LinksAggregate/url-base.service';
import { BaseController } from '../Base/base.controller';
import { UrlBaseEntity } from 'src/Entities/LinksAggregate/urlBase.entity';

@Controller('url-base')
export class UrlBaseController extends BaseController<UrlBaseEntity> {
  constructor(private readonly service: UrlBaseService) {
    super(service);
  }
}
