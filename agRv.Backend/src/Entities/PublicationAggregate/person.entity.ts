import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

@Entity('people')
export class PersonEntity extends BaseEntity {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', name: 'artistic_name' })
  artisticName: string;

  @Column({ type: 'date', name: 'birth_date' })
  birthDate: Date;
}
