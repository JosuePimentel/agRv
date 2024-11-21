import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AddressDto } from "src/DTO's/LocationAggregate/address.dto";
import { AddressModel } from 'src/Models/LocationAggregate/address.model';
import { AddressService } from 'src/Services/LocationAggregate/address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  async create(@Body() model: AddressModel): Promise<AddressDto> {
    return await this.addressService.create(model);
  }

  @Get(':id')
  async findOne(@Param('id') _id: string): Promise<AddressDto> {
    return await this.addressService.findOne(_id);
  }

  @Patch(':id')
  async update(
    @Param('id') _id: string,
    @Body() dto: Partial<AddressDto>,
  ): Promise<AddressDto> {
    return await this.addressService.update(_id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id') _id: string): Promise<void> {
    await this.addressService.delete(_id);
  }
}
