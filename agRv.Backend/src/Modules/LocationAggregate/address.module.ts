import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressController } from 'src/Controllers/LocationAggregate/address.controller';
import { AddressEntity } from 'src/Entities/LocationAggregate/address.entity';
import { AddressService } from 'src/Services/LocationAggregate/address.service';

@Module({
  imports: [TypeOrmModule.forFeature([AddressEntity])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
