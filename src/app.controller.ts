/******************************************************************************
 *  @Execution      :  cmd> npm run dev:start
 *
 *  @Purpose        : Create APIs Using nest framwork with nodejs
 *  @description    : All the route configration
 *  @file           : app.module.ts
 *  @overview       : Backend server APIs
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 28/08/2021
 *
 ******************************************************************************/
/**
 * @implements : Import files
 */
import { Controller, Post, Get, Delete, Put, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // add API route
  @Post('add')
  add(@Body('value') value: string): any {
    return this.appService.addData(value);
  }

  // get API route
  @Get('data')
  getAllData() {
    return this.appService.getAllData();
  }

  // delete API route
  @Delete('delete')
  deleteData(@Body('value') value: string): string {
    return this.appService.deleteData(value);
  }

  // update API route
  @Put('update')
  updateData(
    @Body('oldVal') oldVal: string,
    @Body('newVal') newVal: string,
  ): string {
    return this.appService.updateeData(oldVal, newVal);
  }
}
