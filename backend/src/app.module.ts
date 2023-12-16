import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbconfig } from './config/db.config';

@Module({
  imports: [UserModule,
  TypeOrmModule.forRoot({...dbconfig}),
  UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
