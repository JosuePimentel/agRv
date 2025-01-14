import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShowController } from 'src/Controllers/PublicationAggregate/show.controller';
import { ShowEntity } from 'src/Entities/PublicationAggregate/show.entity';
import { ShowService } from 'src/Services/PublicationAggregate/show.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShowEntity])],
  controllers: [ShowController],
  providers: [ShowService],
})
export class ShowModule {}
