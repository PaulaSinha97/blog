import { Inject, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

// for authentication
@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}
  // constructor(@Inject('USER_SERVICE') private userService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findByNameAndPassword(
      username,
      password,
    );
    return user;
  }

  async validateUserByGoogle(googleSentUserDetails) {
    console.log('step 2 in auth service', googleSentUserDetails);
    return await this.userService.loginUserByGoogle({
      name: googleSentUserDetails.name,
      email: googleSentUserDetails.email,
      password: null,
    });
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
