
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn } from 'typeorm';

@Entity('students')
export class Student {
  @PrimaryColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column()
  year:number

  @Column()
  img:string
}