import { Injectable } from '@nestjs/common';
import { CreateGoodDeedDto } from './dto/create-good-deed.dto';
import { UpdateGoodDeedDto } from './dto/update-good-deed.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class GoodDeedsService {
  constructor(private prisma: PrismaService) {}

  create(createGoodDeedDto: CreateGoodDeedDto) {
    return this.prisma.goodDeed.create({
      data: {
        userId: createGoodDeedDto.userId,
        title: createGoodDeedDto.title,
        description: createGoodDeedDto.description,
      },
    });
  }

  findAll(userId: number) {
    return this.prisma.goodDeed.findMany({ where: { userId: +userId } });
  }

  findOne(id: number) {
    return this.prisma.goodDeed.findFirstOrThrow({ where: { id: +id } });
  }

  update(id: number, updateGoodDeedDto: UpdateGoodDeedDto) {
    return this.prisma.goodDeed.update({
      where: { id: +id },
      data: {
        title: updateGoodDeedDto.title,
        description: updateGoodDeedDto.description,
      },
    });
  }

  remove(id: number) {
    return this.prisma.goodDeed.delete({ where: { id: +id } });
  }
}
