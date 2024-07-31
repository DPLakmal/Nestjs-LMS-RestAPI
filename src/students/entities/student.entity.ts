
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryColumn()
  regno: number;

  @Column({ length: 500 })
   firstname: string;

  @Column({ length: 500 })
   lastname: string;

  @Column()
  academicyear:number;

  @Column()
  isactive:boolean;

  @Column()
  profilepicture:string;
}