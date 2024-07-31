


import { Subject } from 'src/subjects/entities/subject.entity';
import { Entity, Column, PrimaryGeneratedColumn, PrimaryColumn, ManyToOne, OneToMany } from 'typeorm';

@Entity('lecturers')
export class Lecturer {
  [x: string]: any;
  @PrimaryColumn()
  id: string;

  @Column({ length: 500 })
   name: string;

  @Column()
  password:string;

  @Column()
  email:string;

  @Column()
  role:"LECTURER";

  @Column()
  profilepicture:string;


  @OneToMany(() => Subject, subject => subject.lecturer)
  assignsubjects: Subject[];


}
  
