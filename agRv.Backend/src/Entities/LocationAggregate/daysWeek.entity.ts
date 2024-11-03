import { Column, Entity } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';

export enum daysOfWeekEnum {
  Domingo = 'Domingo',
  Segunda = 'Segunda-Feira',
  Terca = 'Terça-Feira',
  Quarta = 'Quarta-Feira',
  Quinta = 'Quinta-Feira',
  Sexta = 'Sexta-Feira',
  Sabado = 'Sábado',
}

@Entity('days_week')
export class DaysWeekEntity extends BaseEntity {
  @Column({
    name: 'day_of_week',
    type: 'enum',
    enum: daysOfWeekEnum,
    default: daysOfWeekEnum.Domingo,
  })
  dayOfWeek: daysOfWeekEnum;
}
