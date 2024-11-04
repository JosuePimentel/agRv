import { Entity } from 'typeorm';
import { BaseSimpleEntity } from '../Base/base-simple.entity';

@Entity('productions-companies')
export class ProductionCompanyEntity extends BaseSimpleEntity {}
