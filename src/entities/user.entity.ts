import { Contacts } from './contact.entity';
import { Exclude } from 'class-transformer';

import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";


@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  readonly id?: string;

  @Column({ length: 60 })
  name: string;

  @Column({ length: 60, unique: true })
  email: string;

  @Column({ length: 150, default: "default_password" })
  @Exclude()
  password: string;

  @Column({ unique: true })
  phone: number;

  @CreateDateColumn()
  createdAt: Date

 @OneToMany(()=>Contacts, contacts=>contacts.user)
  contacts:Contacts[]
}
