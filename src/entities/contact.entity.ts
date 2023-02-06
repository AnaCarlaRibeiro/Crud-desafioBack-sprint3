import { User } from './user.entity';

import { Entity, Column, CreateDateColumn, PrimaryGeneratedColumn, ManyToOne } from "typeorm";

@Entity()
export class Contacts {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ unique: true })
  phone: number;

  @CreateDateColumn()
  createdAt: Date


  @ManyToOne(() => User, { eager: true })
  user: User;
}
