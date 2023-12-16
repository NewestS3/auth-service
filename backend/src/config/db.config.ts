import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { UserEntity } from "src/lib/db/entities/user.entity";

export const dbconfig:TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'db4free.net',
  port: 3306,
  username: 'scrum_management',
  password: 'reactgod@123',
  database: 'scrum_management',
  entities: [UserEntity],
  synchronize: false,
};
