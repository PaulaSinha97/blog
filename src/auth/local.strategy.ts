import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    console.log(' startegy constructor');
    super();
  }
  // call validate automatically
  async validate(username: string, password: string) {
    console.log('PPPPPPPPPPP', username, password);
    const user = await this.authService.validateUser(username, password);
    console.log('after validating user', user);
    if (!user.length) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
