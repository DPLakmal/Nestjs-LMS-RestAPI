import { Lecturer } from 'src/lecturer/entities/lecturer.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn } from 'typeorm';
// Adjust the import path as needed

@Entity('subjects')
export class Subject {
  @PrimaryColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @ManyToOne(() => Lecturer, lecturer => lecturer.assignsubjects)
  lecturer: Lecturer;
}
