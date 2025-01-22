import { Entity } from 'typeorm';
import { BaseSimpleEntity } from '../Base/base-simple.entity';

@Entity('productions_companies')
export class ProductionCompanyEntity extends BaseSimpleEntity {}
