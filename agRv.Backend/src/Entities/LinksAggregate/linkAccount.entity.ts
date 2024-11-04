import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { UrlBaseEntity } from './urlBase.entity';
import { AccountEntity } from '../AccountAggregate/account.entity';

@Entity('link_account')
export class LinkAccountEntity extends BaseEntity {
  @Column()
  link: string;

  @ManyToOne(() => UrlBaseEntity, (urlBase) => urlBase.linkAccount)
  @JoinColumn({ name: 'url_base_id' })
  urlBase: UrlBaseEntity;

  @ManyToOne(() => AccountEntity, (account) => account.linkAccount)
  @JoinColumn({ name: 'account_id' })
  account: AccountEntity;
}
