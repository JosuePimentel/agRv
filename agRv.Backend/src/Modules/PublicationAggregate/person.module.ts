import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PersonController } from 'src/Controllers/PublicationAggregate/person.controller';
import { PersonEntity } from 'src/Entities/PublicationAggregate/person.entity';
import { PersonService } from 'src/Services/PublicationAggregate/person.service';

@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity])],
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule {}
