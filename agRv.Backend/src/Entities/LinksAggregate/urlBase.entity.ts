import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../Base/base.entity';
import { LinkAccountEntity } from './linkAccount.entity';
import { LinkPublicationEntity } from './linkPublication.entity';

@Entity('url_base')
export class UrlBaseEntity extends BaseEntity {
  @Column()
  url: string;

  @Column()
  name: string;

  @OneToMany(() => LinkAccountEntity, (linkAcc) => linkAcc.urlBase)
  linkAccount: LinkAccountEntity[];

  @OneToMany(() => LinkPublicationEntity, (linkPub) => linkPub.urlBase)
  linkPublication: LinkPublicationEntity[];
}
