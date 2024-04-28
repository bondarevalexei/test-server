import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GoodDeedsService } from './good-deeds.service';
import { CreateGoodDeedDto } from './dto/create-good-deed.dto';
import { UpdateGoodDeedDto } from './dto/update-good-deed.dto';

@Controller('good-deeds')
export class GoodDeedsController {
  constructor(private readonly goodDeedsService: GoodDeedsService) {}

  @Post()
  create(@Body() createGoodDeedDto: CreateGoodDeedDto) {
    return this.goodDeedsService.create(createGoodDeedDto);
  }

  @Get(':id')
  findByParam(@Param('id') id: number, @Query('isAll') isAll: string) {
    if (isAll === 'true') {
      return this.goodDeedsService.findAll(+id);
    }

    return this.goodDeedsService.findOne(+id);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe())
  update(@Body() dto: UpdateGoodDeedDto, @Param('id') id: number) {
    return this.goodDeedsService.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.goodDeedsService.remove(+id);
  }
}
