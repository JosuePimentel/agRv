import { Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('restaurants')
export class RestaurantEntity extends BaseEntity {}
