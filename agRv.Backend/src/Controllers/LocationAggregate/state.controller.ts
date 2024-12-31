import { Controller } from '@nestjs/common';
import { StateService } from 'src/Services/LocationAggregate/state.service';
import { BaseController } from '../Base/base.controller';
import { StateEntity } from 'src/Entities/LocationAggregate/state.entity';
import { CountryService } from 'src/Services/LocationAggregate/country.service';

@Controller('state')
export class StateController extends BaseController<StateEntity> {
  constructor(
    private readonly service: StateService,
    private readonly countryService: CountryService,
  ) {
    super(service);
  }

  // @Post()
  // override async create(@Body() model: StateModel): Promise<StateEntity> {
  //   const countryEntity = await this.countryService.findOne({
  //     where: { id: model.countryId },
  //   });

  //   const stateEntity = new StateEntity();
  //   stateEntity.name = model.name;
  //   stateEntity.abbr = model.abbr;
  //   stateEntity.location = model.location;
  //   stateEntity.country = countryEntity;

  //   return await this.service.create(stateEntity);
  // }

  // @Post()
  // async create(@Body() model: StateModel): Promise<StateDto> {
  //   return await this.stateService.create(model);
  // }

  // @Get()
  // async findAll(): Promise<StateDto[]> {
  //   return await this.stateService.findAll();
  // }

  // @Get(':id')
  // async findOne(@Param('id') _id: string) {
  //   return await this.stateService.findOne(_id);
  // }

  // @Patch(':id')
  // async update(
  //   @Param('id') _id: string,
  //   @Body() dto: Partial<StateDto>,
  // ): Promise<StateDto> {
  //   return this.stateService.update(_id, dto);
  // }

  // @Delete(':id')
  // @HttpCode(HttpStatus.NO_CONTENT)
  // async delete(@Param('id') _id: string): Promise<void> {
  //   await this.stateService.delete(_id);
  // }
}
