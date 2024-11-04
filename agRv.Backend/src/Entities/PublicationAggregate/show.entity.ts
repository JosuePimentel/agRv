import { Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('shows')
export class ShowEntity extends BaseEntity {}
