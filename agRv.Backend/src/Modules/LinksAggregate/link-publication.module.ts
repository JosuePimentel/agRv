import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkPublicationController } from 'src/Controllers/LinksAggregate/link-publication.controller';
import { LinkPublicationEntity } from 'src/Entities/LinksAggregate/linkPublication.entity';
import { UrlBaseEntity } from 'src/Entities/LinksAggregate/urlBase.entity';
import { LinkPublicationService } from 'src/Services/LinksAggregate/link-publication.service';
import { LinkAccountModule } from './link-account.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([LinkPublicationEntity, UrlBaseEntity]),
    LinkAccountModule,
  ],
  controllers: [LinkPublicationController],
  providers: [LinkPublicationService],
})
export class LinkPublicationModule {}
