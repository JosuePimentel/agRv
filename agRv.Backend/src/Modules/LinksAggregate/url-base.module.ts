import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UrlBaseController } from 'src/Controllers/LinksAggregate/url-base.controller';
import { UrlBaseEntity } from 'src/Entities/LinksAggregate/urlBase.entity';
import { UrlBaseService } from 'src/Services/LinksAggregate/url-base.service';

@Module({
  imports: [TypeOrmModule.forFeature([UrlBaseEntity])],
  controllers: [UrlBaseController],
  providers: [UrlBaseService],
})
export class UrlBaseModule {}
