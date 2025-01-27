import { IsEmail } from 'class-validator';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  text: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'from' })
  @IsEmail()
  from: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'to' })
  @IsEmail()
  to: string;

  @Column({ type: 'boolean', default: false })
  read: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedA: Date;
}
