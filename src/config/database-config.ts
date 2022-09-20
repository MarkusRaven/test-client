import { DataSourceOptions } from 'typeorm';

const databaseConfig: DataSourceOptions = {
  // host: process.env.TYPEORM_HOST || 'postgres-db',
  type: 'postgres',
  database: 'test',
  username: 'postgres',
  password: 'root',
  port: 5432,
  entities: [__dirname + '/dist/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: true,
  logging: true,
  migrationsRun: false,
};

export default databaseConfig;
