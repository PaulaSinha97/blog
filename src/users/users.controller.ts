import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    console.log(">>>",createUserDto);
    return this.usersService.registerUser(createUserDto);
  }

  @Post('/login')
  findAll(@Body() createUserDto: CreateUserDto) {
    console.log("createUserDto controller",createUserDto)
    return this.usersService.findByNameAndPassword(createUserDto.name,createUserDto.password);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
