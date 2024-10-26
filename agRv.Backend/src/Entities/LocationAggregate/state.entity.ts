import { Column, Entity } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';

@Entity('States')
export class StateEntity extends BaseLocationEntity {}
