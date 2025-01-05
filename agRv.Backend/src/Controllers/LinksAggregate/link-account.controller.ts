import { Controller } from '@nestjs/common';
import { LinkAccountService } from 'src/Services/LinksAggregate/link-account.service';
import { BaseController } from '../Base/base.controller';
import { LinkAccountEntity } from 'src/Entities/LinksAggregate/linkAccount.entity';

@Controller('link-account')
export class LinkAccountController extends BaseController<LinkAccountEntity> {
  constructor(private readonly service: LinkAccountService) {
    super(service);
  }
}
