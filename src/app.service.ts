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
}
