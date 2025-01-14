import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicationPromotedBannerController } from 'src/Controllers/PublicationAggregate/publication-promoted-banner.controller';
import { PublicationPromotedBannerEntity } from 'src/Entities/PublicationAggregate/publication-promoted-banner.entity';
import { PublicationPromotedBannerService } from 'src/Services/PublicationAggregate/publication-promoted-banner.service';

@Module({
  imports: [TypeOrmModule.forFeature([PublicationPromotedBannerEntity])],
  controllers: [PublicationPromotedBannerController],
  providers: [PublicationPromotedBannerService],
})
export class PublicationPromotedBannerModule {}
