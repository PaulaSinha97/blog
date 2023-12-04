import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKey: 'SECRET',
      ignoreExpiration: false,
      jwtFromRequest: ExtractJwt
        .fromAuthHeaderAsBearerToken
        // header me bearer token
        (),
    });
  }

  // saved in request.user jo return kia
  async validate(payload: any) {
    return {
      id: payload.sub,
      name: payload.name,
    };
  }
}
