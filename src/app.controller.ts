import { Controller, Post, Get, Delete, Put, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('add')
  add(@Body('value') value: string): any {
    return this.appService.addData(value);
  }

  @Get('data')
  getAllData() {
    return this.appService.getAllData();
  }

  @Delete('delete')
  deleteData(@Body('value') value: string): string {
    return this.appService.deleteData(value);
  }

  @Put('update')
  updateData(
    @Body('oldVal') oldVal: string,
    @Body('newVal') newVal: string,
  ): string {
    return this.appService.updateeData(oldVal, newVal);
  }
}
