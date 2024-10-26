import {
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ name: 'create_date_column', type: 'timestamptz' })
  createDateColumn: Date;

  @UpdateDateColumn({ name: 'update_date_column', type: 'timestamptz' })
  updateDateColumn: Date;
}
