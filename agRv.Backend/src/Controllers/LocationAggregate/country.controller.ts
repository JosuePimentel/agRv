import { CountryService } from 'src/Services/LocationAggregate/country.service';
import { BaseController } from '../Base/base.controller';
import { Controller } from '@nestjs/common';
import { CountryEntity } from 'src/Entities/LocationAggregate/country.entity';

@Controller('country')
export class CountryController extends BaseController<CountryEntity> {
  constructor(private readonly service: CountryService) {
    super(service);
  }

  // @Post()
  // async create(@Body() model: CountryEntity): Promise<CountryDto> {
  //   return await this.service.create(model);
  // }

  // @Get(':id')
  // async findOne(@Param('id') id: string) {
  //   return await this.service.findOne({ where: { id } });
  // }

  // @Patch(':id')
  // async update(
  //   @Param('id') id: string,
  //   @Body() partialEntity: QueryDeepPartialEntity<CountryEntity>,
  // ): Promise<void> {
  //   this.service.update({ id }, partialEntity);
  // }

  // @Delete(':id')
  // @HttpCode(204)
  // async delete(@Param('id') id: string): Promise<void> {
  //   await this.service.delete({ id });
  // }
}
