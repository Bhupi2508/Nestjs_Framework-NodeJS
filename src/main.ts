/******************************************************************************
 *  @Execution      :  cmd> npm run dev:start
 *
 *  @Purpose        : Create APIs Using nest framwork with nodejs
 *  @description    : Entry point
 *  @file           : main.ts
 *  @overview       : Backend server APIs
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 28/08/2021
 *
 ******************************************************************************/
/**
 * @implements : Import files
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
