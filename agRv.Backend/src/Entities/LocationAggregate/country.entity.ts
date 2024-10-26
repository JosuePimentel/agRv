import { Column, Entity } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';

@Entity('Countries')
export class CountryEntity extends BaseLocationEntity {}
