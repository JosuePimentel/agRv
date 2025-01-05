import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { LinkAccountEntity } from './linkAccount.entity';
import { LinkPublicationEntity } from './linkPublication.entity';

@Entity('url_base')
export class UrlBaseEntity extends BaseEntity {
  @Column({ length: 50, unique: true })
  url: string;

  @Column({ length: 50 })
  name: string;

  @OneToMany(() => LinkAccountEntity, (linkAcc) => linkAcc.urlBaseId)
  linkAccountId: string[];

  @OneToMany(() => LinkPublicationEntity, (linkPub) => linkPub.urlBaseId)
  linkPublicationId: string[];
}
