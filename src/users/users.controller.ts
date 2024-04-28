import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
// import { isEmail } from 'class-validator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':param')
  findOneByParam(@Param('param') param: string) {
    if (this.validateEmail(param)) {
      return this.usersService.findOneByEmail(param);
    } else if (Number.isNaN(+param)) {
      return this.usersService.findOneByTag(param);
    }

    return this.usersService.findOneById(+param);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createUser(@Body() dto: CreateUserDto) {
    return this.usersService.createUser(dto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  updateUser(@Body() dto: UpdateUserDto, @Param('id') id: number) {
    return this.usersService.updateUser(dto, +id);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.usersService.deleteUser(id);
  }

  validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
