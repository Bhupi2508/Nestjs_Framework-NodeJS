/******************************************************************************
 *  @Execution      :  cmd> npm run dev:start
 *
 *  @Purpose        : Create APIs Using nest framwork with nodejs
 *  @description    : Import all the modules and export it
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
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
