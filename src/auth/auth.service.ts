import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

//this is incharge of validating and authenticating the users
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  //method for validating a user
  async validateUser(username: string, password: string): Promise<any> {
    // find the user using the userService
    const user = await this.usersService.findOneUser(username);

    if (user && user.password === password) {
      const { password, username, ...rest } = user;
      return rest;
    } else {
      return null;
    }
  }

  // create a new login method
  async login(user: any) {
    const payload = { name: user.name, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
