import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local-strategy';
// import { LocalAuthGuard } from './local-auth.guard';


@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
       secret:jwtConstants.secretorKey, //put it in your environment variables and it  allows us to validate our jwts
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UsersService, JwtStrategy],
  exports:[AuthService]

})
export class AuthModule {}
