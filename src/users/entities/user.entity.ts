import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ length: 500 })
   name: string;

  @Column()
  password:string;

  @Column()
  email:string;

  @Column()
  role:Role;

  @Column()
  profilepicture:string;
}

enum Role {
    "ADMIN",
    "USER",
    "LECTURER"
}