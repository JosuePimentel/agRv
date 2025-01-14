import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateController } from 'src/Controllers/LocationAggregate/state.controller';
import { StateEntity } from 'src/Entities/LocationAggregate/state.entity';
import { StateService } from 'src/Services/LocationAggregate/state.service';

@Module({
  imports: [TypeOrmModule.forFeature([StateEntity])],
  controllers: [StateController],
  providers: [StateService],
})
export class StateModule {}
