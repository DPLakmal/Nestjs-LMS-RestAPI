import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {

  constructor(
    @Inject('STUDENT_REPOSITORY')
    private studentRepository: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentRepository.save(createStudentDto);
  }

  findAll() {
    return this.studentRepository.find();
  }

  findOne(id: number) {
    return this.studentRepository.find({where:{
      regno: id.toString()
    }});
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
