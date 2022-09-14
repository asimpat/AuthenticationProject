import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';



import { UsersService } from './users/users.service';


@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService,  UsersService, JwtService,],
})
export class AppModule {}
