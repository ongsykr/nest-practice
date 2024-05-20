import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import NewPhoneDto from './dto/phoneDto';
import PhoneData from './types/phoneData';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('phone/add')
  adddata(@Body() body: NewPhoneDto) {
    this.appService.adddata(body);
  }

  @Get('phone/search')
  searchPhone(@Query('name') name: string): PhoneData {
    return this.appService.searchName(name);
  }

  @Get('phone/data')
  getdata(): PhoneData[] {
    return this.appService.getdata();
  }
}
