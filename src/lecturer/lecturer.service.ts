
import { CreateLecturerDto } from './dto/create-lecturer.dto';
import { UpdateLecturerDto } from './dto/update-lecturer.dto';

import { Repository } from 'typeorm';
import { Lecturer } from './entities/lecturer.entity';
import { Subject } from 'src/subjects/entities/subject.entity';
import { Inject, Injectable } from '@nestjs/common';
import { CreateSubjectDto } from 'src/subjects/dto/create-subject.dto';

@Injectable()
export class LecturerService {

  constructor(
    @Inject("LECTURER_REPOSITORY")
    private readonly lecturerRepository: Repository<Lecturer>,
    @Inject('SUBJECT_REPOSITORY')
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  async createSubject(createSubjectDto: CreateSubjectDto): Promise<Subject> {
    const subject = plainToClass(Subject, createSubjectDto);
    const lecturer = await this.lecturerRepository.findOne(createSubjectDto.assignedLecturerIds[0]); // Assuming one lecturer per subject
    if (!lecturer) {
      throw new Error('Lecturer not found');
    }
    subject.lecturer = lecturer;
    return this.subjectRepository.save(subject);
  }

  create(createLecturerDto: CreateLecturerDto) {
    return 'This action adds a new lecturer';
  }

  findAll() {
    return `This action returns all lecturer`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lecturer`;
  }

  update(id: number, updateLecturerDto: UpdateLecturerDto) {
    return `This action updates a #${id} lecturer`;
  }

  remove(id: number) {
    return `This action removes a #${id} lecturer`;
  }
}
function InjectRepository(Lecturer: any): (target: typeof LecturerService, propertyKey: undefined, parameterIndex: 0) => void {
  throw new Error('Function not implemented.');
}

function plainToClass(Subject: typeof Subject, createSubjectDto: CreateSubjectDto) {
  throw new Error('Function not implemented.');
}

