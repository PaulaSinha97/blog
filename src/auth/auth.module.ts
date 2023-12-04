import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './locall.strategyy';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './googleStrategy';

@Module({
  imports: [forwardRef(()=>UsersModule),JwtModule.register({
    secret: 'SECRET',
    signOptions:{expiresIn:'60s'}
  })],
  providers: [AuthService, LocalStrategy, GoogleStrategy],
  exports:[AuthService]
})
export class AuthModule {}
