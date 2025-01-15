import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  text: string;

  @Column()
  from: string;

  @Column()
  to: string;

  @Column({ default: false })
  read: boolean;

  @CreateDateColumn()
  date: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
