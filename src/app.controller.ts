import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
// import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
// import { AuthenticatedGuard } from './auth/authenticated.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService:AuthService) {}

  // POST /login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user) //TODO: on login return JWT access token
  } 

  // GET  protected
  @UseGuards(JwtAuthGuard)
  @Get('protected')//protecting the route with the access token
  getHello(@Request() req): string { //TODO: require to have an access token and ensure that it is valid(validated token)
    return req.user;
  }
}
