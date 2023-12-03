import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile } from 'passport';
import { Strategy } from 'passport-google-oauth20';
import { AuthService } from './auth.service';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      clientID:
        '408785331720-vr10hj37u58ans24fp1edh5h49dd1dlj.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google/redirect',
      scope: ['profile', 'email'],
    });
  }

  async validate(accessToke, refreshToken, profile: Profile) {
    // does not send google account password
    console.log('>>>', accessToke, refreshToken, profile);
    const userValidationByStrategy =
      await this.authService.validateUserByGoogle({
        name: profile.displayName,
        email: profile.emails[0],
      });
    console.log('userValidationByStrategy', userValidationByStrategy);
    return userValidationByStrategy || null;
  }
}
