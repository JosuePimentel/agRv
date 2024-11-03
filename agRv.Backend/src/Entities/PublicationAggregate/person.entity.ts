import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('people')
export class PersonEntity extends BaseEntity {
  @Column()
  name: string;

  @Column({ name: 'artistic_name', nullable: true })
  artisticName: string;

  @Column({ type: 'date', name: 'birth_date', nullable: true })
  birthDate: Date;
}
