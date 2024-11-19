import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkAccountController } from 'src/Controllers/LinksAggregate/link-account.controller';
import { LinkAccountEntity } from 'src/Entities/LinksAggregate/linkAccount.entity';
import { UrlBaseEntity } from 'src/Entities/LinksAggregate/urlBase.entity';
import { LinkAccountService } from 'src/Services/LinksAggregate/link-account.service';

@Module({
  imports: [TypeOrmModule.forFeature([UrlBaseEntity, LinkAccountEntity])],
  controllers: [LinkAccountController],
  providers: [LinkAccountService],
})
export class LinkAccountModule {}
