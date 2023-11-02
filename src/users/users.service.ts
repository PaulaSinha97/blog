import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRegisterInterface } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('Users')
    private readonly userModel: Model<UserRegisterInterface>,
  ) {}

  async registerUser(createUserDto: CreateUserDto) {
    const userData = await this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.email,
    });
    userData.save();
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
