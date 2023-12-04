import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './locall.strategyy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[forwardRef(()=>UsersModule),JwtModule.register({
    secret: 'SECRET',
    signOptions:{expiresIn:'60s'}
  })],
  providers: [AuthService,LocalStrategy],
  exports :[AuthService]
})
export class AuthModule {}
