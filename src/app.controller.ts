import { Controller, Post, Get, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add')
  add(@Body('value') value: string): string {
    return this.appService.addData(value);
  }

  @Get('data')
  getAllData() {
    return this.appService.getAllData();
  }
}
