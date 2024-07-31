import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';
import { DatabaseModule } from 'src/database/database.module';
import { studentProviders } from 'src/students/students.repostitory';

@Module({
  imports: [DatabaseModule],
  controllers: [SubjectsController],
  providers: [SubjectsService,...studentProviders],
})
export class SubjectsModule {}
