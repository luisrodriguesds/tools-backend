import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tools' })
export class Tool {
  @PrimaryColumn({ type: 'int' })
  id: string;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @Column()
  tags: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
