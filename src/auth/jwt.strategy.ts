import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  //to configure the stategy we do that in the constructor
    //this will extrat the jwt from the header and all the validating will be done
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //how to get the access token

      ignoreExpiration: false,
      secretorKey: jwtConstants.secretorKey  //protect this key
    });
    }
    
    //once it is done validating and extracting
    async validate(payload: any) { // this is where once the validation of a correct jwt is done, then we can now write a logic to find the user object from the database..what ever is returned is stored in the req.user
        //const user= await this.userService.getById(payload.sub)
    
        //the payload is the decoded jwt(the json payload)
        return {
          //what ever is return is what will be saved in the request.user

          id: payload.sub,
            name: payload.name,
        //   ...user
        };
    }
}
