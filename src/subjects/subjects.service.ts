import { Injectable } from '@nestjs/common';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { Repository } from 'typeorm';
import { Student } from 'src/students/entities/student.entity';

@Injectable()
export class SubjectsService {
  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  create(createSubjectDto: CreateSubjectDto) {
    return this.studentRepository.save(createSubjectDto);
  }

  findAll() {
    return `This action returns all subjects`;
  }

  findOne(id: number) {
    return `This action returns a #${id} subject`;
  }

  update(id: number, updateSubjectDto: UpdateSubjectDto) {
    return `This action updates a #${id} subject`;
  }

  remove(id: number) {
    return `This action removes a #${id} subject`;
  }
}
function Inject(arg0: string): (target: typeof SubjectsService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

