import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { LectureService } from './lecture.service';
import lectureDto from 'src/dto/lectureDto';
import lectureData from 'src/types/lectureData';

@Controller('lecture')
export class LectureController {
  constructor(private readonly lectuerService: LectureService) {}

  @Post('/add')
  addLecture(@Body() body: lectureDto) {
    this.lectuerService.addLecture(body);
  }

  @Get('/get')
  getLecture() {
    return this.lectuerService.getLecture();
  }

  @Get('/search')
  searchLecture(@Query('name') name: string): lectureData {
    return this.lectuerService.searchLecture(name);
  }
}
