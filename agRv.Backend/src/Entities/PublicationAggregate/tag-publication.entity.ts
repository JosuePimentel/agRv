import { Entity } from 'typeorm';
import { BaseSimpleEntity } from '../Base/base-simple.entity';

@Entity('tag_publications')
export class TagPublicationEntity extends BaseSimpleEntity {}
