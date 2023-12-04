import { Module, forwardRef } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRegisterSchema } from './user.model';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  // Users is collection name, but mongo me filhal users "small u k sath a rha he and it appends one extra s as well to the end"
  imports:[MongooseModule.forFeature([{name:"Users", schema:UserRegisterSchema}]), forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService],
  exports:[UsersService]
})
export class UsersModule {}
