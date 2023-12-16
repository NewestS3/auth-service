import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/userregister.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userservice: UserService) {}

  @Post('/register')
  async registeruser(@Body() createuserdto: CreateUserDto) {
    try {
      console.log(createuserdto);
      return this.userservice.insertuser(createuserdto);
    } catch (err) {
      throw err;
    }
  }
}
