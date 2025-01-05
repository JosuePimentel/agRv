import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { UrlBaseEntity } from './urlBase.entity';
import { AccountEntity } from '../AccountAggregate/account.entity';

@Entity('link_account')
export class LinkAccountEntity extends BaseEntity {
  @Column()
  link: string;

  @ManyToOne(() => UrlBaseEntity, {
    nullable: false,
    eager: true,
  })
  @JoinColumn({ name: 'url_base_id' })
  urlBaseId: string;

  @ManyToOne(() => AccountEntity, { eager: true })
  @JoinColumn({ name: 'account_id' })
  accountId: string;
}
