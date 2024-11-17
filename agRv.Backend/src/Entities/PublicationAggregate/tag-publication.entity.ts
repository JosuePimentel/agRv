import { Entity } from 'typeorm';
import { BaseSimpleEntity } from '../Base/base-simple.entity';

@Entity('tags_publications')
export class TagPublicationEntity extends BaseSimpleEntity {}
