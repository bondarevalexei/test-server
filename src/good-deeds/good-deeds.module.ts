import { Module } from '@nestjs/common';
import { GoodDeedsService } from './good-deeds.service';
import { GoodDeedsController } from './good-deeds.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [GoodDeedsController],
  providers: [GoodDeedsService, PrismaService],
})
export class GoodDeedsModule {}
