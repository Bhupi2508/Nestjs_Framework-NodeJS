import { Controller, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('newData')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  add(@Body('value') value: string): string {
    return this.appService.addData(value);
  }
}
