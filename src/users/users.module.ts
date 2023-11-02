import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRegisterSchema } from './user.model';

@Module({
  imports:[MongooseModule.forFeature([{name:"Users", schema:UserRegisterSchema}])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
