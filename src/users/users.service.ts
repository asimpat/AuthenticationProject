import { Injectable } from '@nestjs/common';
import { Users } from './typeUsers/type.users';

@Injectable()
export class UsersService {
    private readonly users: Users[] = [
        {
            id: 1,
            name: "asim",
            username: "asimpat",
            password:"2222"
            
        },
        {
            id: 2,
            name: "paul",
            username: "peter",
            password:"0000"
            
        }
    ]
   async findOneUser(username:string):Promise<Users|undefined> {
        return this.users.find((user)=>user.username===username)
    }
}
