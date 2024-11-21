import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseLocationEntity } from '../Base/baseLocation.entiity';
import { CityEntity } from './city.entity';

@Entity('addresses')
export class AddressEntity extends BaseLocationEntity {
  @Column()
  CEP: string;

  @Column({ nullable: true })
  complement: string;

  @ManyToOne(() => CityEntity, (city) => city.address, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'city_id' })
  city: CityEntity;
}
