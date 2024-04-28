import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.user.findMany();
  }

  async findOneById(id: number) {
    return this.prisma.user.findFirstOrThrow({ where: { id: +id } });
  }

  async findOneByTag(tag: string) {
    return this.prisma.user.findFirstOrThrow({ where: { tag: tag } });
  }

  async findOneByEmail(email: string) {
    return this.prisma.user.findFirstOrThrow({
      where: { email: email },
    });
  }

  async createUser(userDto: CreateUserDto) {
    return this.prisma.user.create({
      data: {
        email: userDto.email,
        name: userDto.name,
        password: userDto.password,
        tag: userDto.tag,
        Friends: userDto.friends,
      },
    });
  }

  async updateUser(userDto: UpdateUserDto, id: number) {
    return this.prisma.user.update({
      where: { id: +id },
      data: {
        email: userDto.email,
        name: userDto.name,
        tag: userDto.tag,
        Friends: userDto.friends,
      },
    });
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id: +id } });
  }
}
