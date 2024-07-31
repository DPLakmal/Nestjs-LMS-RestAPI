import { DataSource } from "typeorm";
import { Lecturer } from "./entities/lecturer.entity";


export const studentProviders = [
    {
      provide: 'LECTURER_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Lecturer),
      inject: ['DATA_SOURCE'],
    },
  ];