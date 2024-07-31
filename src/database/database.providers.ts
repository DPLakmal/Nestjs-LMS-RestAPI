import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
      host: 'ep-red-math-a503u6up.us-east-2.aws.neon.tech',
      port: 5432,
      username: 'neon_owner',
      password: 'b95kYpQgPDxG',
      database: 'NestJs-LMS-API',
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      migrations: [__dirname + '/../migrations/*{.ts,.js}'],
      synchronize: false,
      migrationsRun: true,
      logging: true,
      ssl: {
        rejectUnauthorized: false,
      }
      });

      return dataSource.initialize();
    },
  },
];