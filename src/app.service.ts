/******************************************************************************
 *  @Execution      :  cmd> npm run dev:start
 *
 *  @Purpose        : Create APIs Using nest framwork with nodejs
 *  @description    : All the APIs logic file
 *  @file           : app.service.ts
 *  @overview       : Backend server APIs
 *  @author         : Bhupendra Singh<bhupendrasingh.ec18@gmail.com>
 *  @version        : 1.0
 *  @since          : 28/08/2021
 *
 ******************************************************************************/
/**
 * @implements : Import files
 */
import { Injectable, NotFoundException } from '@nestjs/common';

const array = [];
@Injectable()
export class AppService {
  addData(value: string): any {
    if (!value) {
      throw new NotFoundException('Please provide inputs');
    }
    array.push(value);
    return array;
  }

  getAllData() {
    if (!array) {
      throw new NotFoundException('No Data Available');
    }
    return array;
  }

  deleteData(value: string): string {
    if (!value) {
      throw new NotFoundException('Please provide input!');
    }
    if (array.includes(value)) {
      const index = array.indexOf(value);
      if (index > -1) {
        array.splice(index, 1);
      }
    } else {
      throw new NotFoundException(`${value} is not exist`);
    }
    return `${value} is deleted successfully!`;
  }

  updateeData(oldVal: string, newVal: string): string {
    if (!oldVal) {
      throw new NotFoundException('please provide input!');
    }
    if (array.includes(oldVal)) {
      const index = array.indexOf(oldVal);
      if (index > -1) {
        array[index] = newVal;
      }
    } else {
      throw new NotFoundException(`${oldVal} is not exist`);
    }
    return `${oldVal} is updated successfully!`;
  }
}
