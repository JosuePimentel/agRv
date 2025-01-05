import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';
import { CityEntity } from './city.entity';

@Entity('addresses')
export class AddressEntity extends BaseLocationEntity {
  @Column({ length: 10 })
  CEP: string;

  @Column({ nullable: true })
  complement: string;

  @Column()
  neighborhood: string;

  @ManyToOne(() => CityEntity, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'city_id' })
  cityId: string;
}
