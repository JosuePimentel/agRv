import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkPublicationController } from 'src/Controllers/LinksAggregate/link-publication.controller';
import { LinkPublicationEntity } from 'src/Entities/LinksAggregate/linkPublication.entity';
import { LinkPublicationService } from 'src/Services/LinksAggregate/link-publication.service';

@Module({
  imports: [TypeOrmModule.forFeature([LinkPublicationEntity])],
  controllers: [LinkPublicationController],
  providers: [LinkPublicationService],
})
export class LinkPublicationModule {}
