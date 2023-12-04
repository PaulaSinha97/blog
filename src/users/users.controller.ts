import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LocalAuthGuard } from 'src/auth/local-auth-guard';
import { GoogleAuthGuard } from 'src/auth/googleGuard';
import { AuthService } from 'src/auth/auth.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService, private readonly authService: AuthService) {}

  @Post('/register')
  create(@Body() createUserDto: CreateUserDto) {
    console.log('>>>', createUserDto);
    return this.usersService.registerUser(createUserDto);
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  findAll(@Request() req) {
   
    return this.authService.login(req.user);
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/login')
  googleLogin(@Request() req) {
    console.log('createUserDto controller', req);
    return req.user;
  }

  @UseGuards(GoogleAuthGuard)
  @Get('google/redirect')
  googleRedirectAfterLogin(@Request() req) {
    console.log('createUserDto controller', req);
    // return req.user;
  }

  @Get('/protected')
  protectedRoute(){
    return "kljvfkljvk"
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
