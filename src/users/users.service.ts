import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserRegisterInterface } from './user.model';
import { comparePasswords, hashPasswordWithBcrypt } from 'src/utils/bcrypt';

@Injectable()
export class UsersService {
  constructor(
    // Users is collection name, same defined in users module
    @InjectModel('Users')
    private readonly userModel: Model<UserRegisterInterface>,
  ) {}

  async registerUser(createUserDto: CreateUserDto) {
    console.log('in service', createUserDto);
    const userData = await this.userModel.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: await hashPasswordWithBcrypt(createUserDto.password),
    });
    userData.save();
    return 'This action adds a new user';
  }

  async loginUserByGoogle(userDetails: CreateUserDto) {
    const user = await this.userModel.find({ email: userDetails.email });
    console.log('user in user service', user);
    if (user) {
      return user;
    }
    // if new user then add them to db
    return this.registerUser({
      name: userDetails.name,
      email: userDetails.email,
      password: null,
    });
  }

  async findByNameAndPassword(name: string, password: string) {
    const findUserByName = await this.userModel.find({ name });
    if (findUserByName) {
      const matched = comparePasswords(password, findUserByName[0].password);
      console.log(
        'useruser',
        name,
        password,
        'findUserByName',
        findUserByName,
        'matched',
        matched,
      );
      // matched is boolean value
      if (matched) {
        return findUserByName;
      } else {
        return 'wrong password';
      }
    } else {
      return 'wrong username';
    }
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
