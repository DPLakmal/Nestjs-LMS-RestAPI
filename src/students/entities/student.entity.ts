
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryColumn()
  regno: string;

  @Column({ length: 500 })
   firstname: string;

  @Column({ length: 500 })
   lastname: string;

  @Column()
  academicyear:string;

  @Column()
  isactive:boolean;

  @Column()
  profilepicture:string;
}