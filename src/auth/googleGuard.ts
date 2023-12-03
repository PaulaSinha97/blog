import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

// acts as a middleman, passing in request so that it can actually authenticate the user
@Injectable()
export class GoogleAuthGuard extends AuthGuard('google') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    // console.log('why not printing.....');
    const activate = (await super.canActivate(context)) as boolean;
    console.log('innnnnnnnnnnnnnnnn 22222222222222', activate);
    const request = context.switchToHttp().getRequest();
    await super.logIn(request);
    console.log('innnnnnnnnnnnnnnnn', activate);
    return activate;
  }
}
