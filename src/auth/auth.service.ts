import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

// for authentication
@Injectable()
export class AuthService {
    constructor(private userService: UsersService){}

    async validateUser(username:string,password:string):Promise<any>{
        const user= await this.userService.findByNameAndPassword(username,password);
        return user;
    }
}
